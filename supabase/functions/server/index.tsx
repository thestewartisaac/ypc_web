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

    const displayName = initialsOnly
      ? name.trim().split(/\s+/).map((n: string) => n[0].toUpperCase()).join(".") + "."
      : name.trim();

    const submissionId = `story:${Date.now()}:${crypto.randomUUID()}`;
    const submittedAt = new Date().toISOString();

    await kv.set(submissionId, JSON.stringify({
      id: submissionId,
      story,
      name,
      displayName,
      initialsOnly,
      submittedAt,
    }));

    console.log(`Stored submission ${submissionId}`);
    return c.json({ success: true, id: submissionId, displayName });
  } catch (error) {
    console.log(`Error in submit-story: ${error}`);
    return c.json({ error: `Failed to process submission: ${error}` }, 500);
  }
});

Deno.serve(app.fetch);
