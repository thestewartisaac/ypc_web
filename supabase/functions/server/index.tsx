import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use('*', logger(console.log));

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

app.get("/make-server-094f091c/health", (c) => {
  return c.json({ status: "ok" });
});

app.post("/make-server-094f091c/submit-story", async (c) => {
  try {
    const body = await c.req.json();
    const { story, name, initialsOnly } = body;

    if (!story || !name) {
      return c.json({ error: "Missing required fields: story and name" }, 400);
    }

    // Derive display name
    const displayName = initialsOnly
      ? name.trim().split(/\s+/).map((n: string) => n[0].toUpperCase()).join(".") + "."
      : name.trim();

    const submissionId = `story:${Date.now()}:${crypto.randomUUID()}`;
    const submittedAt = new Date().toISOString();

    // Persist in KV store
    await kv.set(submissionId, JSON.stringify({
      id: submissionId,
      story,
      name,
      displayName,
      initialsOnly,
      submittedAt,
    }));

    console.log(`Stored submission ${submissionId}`);

    // Send email via EmailJS REST API
    const serviceId  = Deno.env.get("EMAILJS_SERVICE_ID");
    const templateId = Deno.env.get("EMAILJS_TEMPLATE_ID");
    const publicKey  = Deno.env.get("EMAILJS_PUBLIC_KEY");
    const privateKey = Deno.env.get("EMAILJS_PRIVATE_KEY");

    if (!serviceId || !templateId || !publicKey) {
      console.log("EmailJS env vars missing — skipping notification");
    } else {
      const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          ...(privateKey ? { accessToken: privateKey } : {}),
          template_params: {
            submitter_name: displayName,
            story_content: story,
            submitted_at: new Date(submittedAt).toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            }),
          },
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.log(`EmailJS error for ${submissionId}: ${errText}`);
      } else {
        console.log(`Email notification sent for ${submissionId}`);
      }
    }

    return c.json({ success: true, id: submissionId });
  } catch (error) {
    console.log(`Error in submit-story: ${error}`);
    return c.json({ error: `Failed to process submission: ${error}` }, 500);
  }
});

Deno.serve(app.fetch);
