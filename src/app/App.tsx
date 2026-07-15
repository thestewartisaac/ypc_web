import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "../imports/PrivacyLeaked/svg-xnk1c3x1j4";
import imgHeroImage from "../imports/PrivacyLeaked/4004e0f31a09932151c9d23d0924d88bd99852f2.png";

gsap.registerPlugin(ScrollTrigger);

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <div
      style={{
        height: "57.57px",
        width: "47.767px",
        position: "relative",
        flexShrink: 0,
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
        fill="none"
        viewBox="0 0 47.7668 57.5704"
      >
        <g>
          <path d={svgPaths.p1e7d9e80} fill="white" />
          <path d={svgPaths.p25536f00} fill="white" />
          <path d={svgPaths.p22b368a} fill="white" />
          <circle
            cx="9.46591"
            cy="10.3781"
            fill="white"
            r="6.43155"
          />
          <circle
            cx="23.7634"
            cy="10.3781"
            fill="white"
            r="6.43155"
          />
          <path d={svgPaths.p3ea2ff00} fill="white" />
        </g>
      </svg>
    </div>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function HeroSection({
  onScrollToStories,
}: {
  onScrollToStories: () => void;
}) {
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const inputCardRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const readLinkRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });
      tl.fromTo(
        navbarRef.current,
        { y: -70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
      )
        .fromTo(
          headlineRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          "-=0.3",
        )
        .fromTo(
          inputCardRef.current,
          { y: 50, opacity: 0, scale: 0.97 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7 },
          "-=0.45",
        )
        .fromTo(
          submitBtnRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            clearProps: "opacity,transform",
          },
          "-=0.4",
        )
        .fromTo(
          readLinkRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.35",
        );

      // Flowing gradient: cycle background-position through all four corners
      const gradientTl = gsap.timeline({
        repeat: -1,
        ease: "sine.inOut",
      });
      gradientTl
        .to(inputCardRef.current, {
          backgroundPosition: "0% 100%",
          duration: 3.5,
          ease: "sine.inOut",
        })
        .to(inputCardRef.current, {
          backgroundPosition: "100% 100%",
          duration: 3.5,
          ease: "sine.inOut",
        })
        .to(inputCardRef.current, {
          backgroundPosition: "100% 0%",
          duration: 3.5,
          ease: "sine.inOut",
        })
        .to(inputCardRef.current, {
          backgroundPosition: "0% 0%",
          duration: 3.5,
          ease: "sine.inOut",
        });
    });
    return () => ctx.revert();
  }, []);

  const handleSubmit = () => {
    if (story.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setStory("");
        setSubmitted(false);
      }, 2500);
    }
  };

  return (
    <section
      style={{
        background: "#07522e",
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={imgHeroImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
      </div>

      <nav
        ref={navbarRef}
        style={{
          position: "absolute",
          top: "44px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1560px, calc(100% - 40px))",
          height: "97px",
          background: "rgba(0,0,0,0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "20px",
          border: "1px solid rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          boxShadow: "0px 4.133px 33.476px 0px rgba(0,0,0,0.1)",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Logo />
          <div style={{ color: "white", lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(18px, 1.5vw, 27px)",
                fontWeight: 900,
              }}
            >
              Youth Privacy
            </div>
            <div
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: "clamp(14px, 1.2vw, 21px)",
                fontWeight: 400,
              }}
            >
              Community
            </div>
          </div>
        </div>
        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden md:flex"
          style={{
            background: "#49d899",
            color: "#131313",
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(14px, 1vw, 17px)",
            padding: "0 28px",
            height: "56px",
            borderRadius: "16px",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Visit our website
          <svg
            width="20"
            height="20"
            viewBox="0 0 10.1888 10.1888"
            fill="none"
          >
            <path
              d={svgPaths.pf419b00}
              stroke="#131313"
              strokeWidth="1.28571"
            />
            <path
              d={svgPaths.p3eb2f100}
              stroke="#131313"
              strokeWidth="1.28571"
            />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center"
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: "none",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "14px",
            cursor: "pointer",
            padding: "10px",
            width: "56px",
            height: "56px",
            flexShrink: 0,
          }}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 12H10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M20 5H4"  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M20 19H4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="flex md:hidden"
          style={{
            position: "absolute",
            top: "157px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "min(1560px, calc(100% - 40px))",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            borderRadius: "16px",
            padding: "16px 24px",
            zIndex: 3,
          }}
        >
          <a
            href="#"
            style={{
              color: "white",
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
            }}
          >
            Visit our website
          </a>
        </div>
      )}

      <h1
        ref={headlineRef}
        style={{
          position: "relative",
          fontFamily: "'Archivo Black', sans-serif",
          fontWeight: 900,
          fontSize: "clamp(4rem, 7.4vw, 8rem)",
          color: "white",
          textAlign: "center",
          lineHeight: 0.85,
          marginTop: "clamp(165px, 14vw, 240px)",
          marginBottom: 0,
          width: "min(1071px, 90%)",
          zIndex: 1,
        }}
      >
        Privacy Leaked Stories
      </h1>

      <div
        ref={inputCardRef}
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "clamp(24px, 3vw, 48px)",
          width: "min(707px, 90%)",
          background:
            "linear-gradient(135deg, #FFD900 0%, #C8FF00 20%, #7DFF5A 45%, #00FF99 70%, #00FF66 100%)",
          backgroundSize: "400% 400%",
          backgroundPosition: "0% 0%",
          borderRadius: "38px",
          padding: "30px 13px 13px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          boxShadow: "0px 3.4px 8.5px rgba(0,0,0,0.3)",
        }}
      >
        <p
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 27px)",
            color: "#131313",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.2,
            width: "min(487px, 90%)",
          }}
        >
          Anonymously{" "}
          <strong
            style={{
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700,
            }}
          >
            share how your privacy has been leaked for others to
            learn. This is your safe space!
          </strong>
        </p>
        <div style={{ position: "relative", width: "100%" }}>
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            style={{
              width: "100%",
              minHeight: "14rem",
              background: "white",
              border: "none",
              borderRadius: "26px",
              padding: "20px 24px",
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "#131313",
              resize: "vertical",
              outline: "none",
              boxSizing: "border-box",
              display: "block",
              textAlign: "center",
            }}
          />
          {!story && (
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                color: "rgba(19,19,19,0.55)",
                pointerEvents: "none",
                whiteSpace: "nowrap",
              }}
            >
              Share your story here...
            </span>
          )}
        </div>
      </div>

      <button
        ref={submitBtnRef}
        onClick={handleSubmit}
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "24px",
          background: "#ff7400",
          color: "#131313",
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(0.9rem, 1.2vw, 1.07rem)",
          padding: "0 clamp(1.25rem, 3vw, 1.875rem)",
          height: "3.75rem",
          minWidth: "clamp(8rem, 40vw, 12rem)",
          borderRadius: "16px",
          border: "none",
          cursor: "pointer",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.opacity = "0.85")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.opacity = "1")
        }
      >
        {submitted ? "Thank you! ✓" : "Submit"}
      </button>

      <button
        ref={readLinkRef}
        onClick={onScrollToStories}
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "40px",
          marginBottom: "60px",
          background: "none",
          border: "none",
          color: "white",
          fontFamily: "'Host Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(20px, 2.2vw, 36px)",
          textDecoration: "underline",
          cursor: "pointer",
          textUnderlineOffset: "4px",
        }}
      >
        Read other stories
      </button>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqData = [
  {
    id: 1,
    question: "Is this actually 100% anonymous?",
    answer:
      "Yes, completely. We do not collect any identifying information when you submit your story. No IP addresses are logged, no accounts are required, and submissions are stripped of any metadata before being reviewed.",
  },
  {
    id: 2,
    question: "What happens after I share my story?",
    answer:
      "Our team reviews it to make sure no personal info slipped through, then we push it to the public feed. Your experience becomes a lesson for the rest of the community to learn from.",
  },
  {
    id: 3,
    question:
      "What if I accidentally include real names or details?",
    answer:
      "No worries — our moderation team will redact any identifying information before publishing. We scrub names, locations, and any other details that could reveal who you are or who you're talking about.",
  },
  {
    id: 4,
    question: "Why do we need to read these leaked stories?",
    answer:
      "Reading real stories helps you recognize the signs of privacy violations before they happen to you. Each story is a case study in what goes wrong and why — and a reminder that privacy protection is something we all need to practice.",
  },
];

const INITIAL_OPEN_ID = 2;

function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(
    INITIAL_OPEN_ID,
  );

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Per-item refs
  const wrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const questionRefs = useRef<(HTMLParagraphElement | null)[]>(
    [],
  );
  const plusIconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const minusIconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconBorderRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Dividers: index 0 = top of list, 1..N = after each item
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set initial GSAP state on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      faqData.forEach((faq, idx) => {
        const open = faq.id === INITIAL_OPEN_ID;
        const wrapper = wrapperRefs.current[idx];
        const answer = answerRefs.current[idx];
        const question = questionRefs.current[idx];
        const plus = plusIconRefs.current[idx];
        const minus = minusIconRefs.current[idx];
        const border = iconBorderRefs.current[idx];

        if (open) {
          gsap.set(wrapper, {
            backgroundColor: "#49d899",
            borderRadius: 24,
          });
          gsap.set(answer, { height: "auto", opacity: 1 });
          gsap.set(question, { color: "#131313" });
          gsap.set(plus, { opacity: 0 });
          gsap.set(minus, { opacity: 1 });
          gsap.set(border, { borderColor: "rgba(0,0,0,0.1)" });
        } else {
          gsap.set(wrapper, {
            backgroundColor: "transparent",
            borderRadius: 0,
          });
          gsap.set(answer, { height: 0, opacity: 0 });
          gsap.set(question, { color: "#ffffff" });
          gsap.set(plus, { opacity: 1 });
          gsap.set(minus, { opacity: 0 });
          gsap.set(border, {
            borderColor: "rgba(255,255,255,0.1)",
          });
        }
      });

      // Hide dividers adjacent to the initially open item
      updateDividers(INITIAL_OPEN_ID, false);

      // Scroll animation: heading
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          once: true,
        },
      });

      // Scroll animation: stagger FAQ items
      faqData.forEach((_, idx) => {
        gsap.from(wrapperRefs.current[idx], {
          y: 35,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRefs.current[idx],
            start: "top 88%",
            once: true,
          },
          delay: idx * 0.08,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function updateDividers(
    activeId: number | null,
    animate: boolean,
  ) {
    const activeIdx = faqData.findIndex(
      (f) => f.id === activeId,
    );

    dividerRefs.current.forEach((el, i) => {
      if (!el) return;
      // divider[0] = above item 0, divider[k+1] = below item k
      // Hide divider[activeIdx] (above active item) and divider[activeIdx+1] (below active item)
      const shouldHide =
        activeIdx !== -1 &&
        (i === activeIdx || i === activeIdx + 1);
      if (animate) {
        gsap.to(el, {
          opacity: shouldHide ? 0 : 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.set(el, { opacity: shouldHide ? 0 : 1 });
      }
    });
  }

  function toggle(id: number, idx: number) {
    const isOpening = openId !== id;
    const newOpenId = isOpening ? id : null;
    const isSwitching = isOpening && openId !== null;

    // Close previously open item
    if (openId !== null) {
      const prevIdx = faqData.findIndex((f) => f.id === openId);
      const pw = wrapperRefs.current[prevIdx];
      const pa = answerRefs.current[prevIdx];
      const pq = questionRefs.current[prevIdx];
      const pp = plusIconRefs.current[prevIdx];
      const pm = minusIconRefs.current[prevIdx];
      const pb = iconBorderRefs.current[prevIdx];

      gsap.killTweensOf([pw, pa, pq, pp, pm, pb]);

      const closeTl = gsap.timeline();
      closeTl
        .to(pa, { height: 0, opacity: 0, duration: 0.32, ease: "power3.inOut" }, 0)
        .to(pw, { backgroundColor: "transparent", borderRadius: 0, duration: 0.32, ease: "power2.inOut" }, 0)
        .to(pq, { color: "#ffffff", duration: 0.28 }, 0)
        .to(pm, { opacity: 0, duration: 0.16 }, 0)
        .to(pp, { opacity: 1, duration: 0.16 }, 0.1)
        .to(pb, { borderColor: "rgba(255,255,255,0.1)", duration: 0.28 }, 0);
    }

    // Open new item — delayed slightly when switching so close leads
    if (isOpening) {
      const wrapper = wrapperRefs.current[idx];
      const answer = answerRefs.current[idx];
      const question = questionRefs.current[idx];
      const plus = plusIconRefs.current[idx];
      const minus = minusIconRefs.current[idx];
      const border = iconBorderRefs.current[idx];

      gsap.killTweensOf([wrapper, answer, question, plus, minus, border]);

      // Measure natural height for a precise pixel animation (avoids "auto" mid-flight issues)
      const naturalHeight = answer!.scrollHeight;
      const openDelay = isSwitching ? 0.18 : 0;

      const openTl = gsap.timeline({ delay: openDelay });
      openTl
        .to(wrapper, { backgroundColor: "#49d899", borderRadius: 24, duration: 0.35, ease: "power2.out" }, 0)
        .to(answer, { height: naturalHeight, opacity: 1, duration: 0.38, ease: "power3.out" }, 0.04)
        .set(answer, { height: "auto" })
        .to(question, { color: "#131313", duration: 0.28 }, 0)
        .to(plus, { opacity: 0, duration: 0.16 }, 0.04)
        .to(minus, { opacity: 1, duration: 0.16 }, 0.04)
        .to(border, { borderColor: "rgba(0,0,0,0.1)", duration: 0.28 }, 0);
    }

    setOpenId(newOpenId);
    updateDividers(newOpenId, true);
  }

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#07522e",
        width: "100%",
        padding:
          "clamp(60px, 9vw, 150px) clamp(24px, 5.8vw, 100px) clamp(60px, 5.8vw, 100px)",
        boxSizing: "border-box",
      }}
    >
      <h2
        ref={headingRef}
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 600,
          fontSize: "clamp(40px, 4.2vw, 72px)",
          color: "white",
          textAlign: "center",
          marginBottom: "clamp(40px, 4.3vw, 74px)",
          marginTop: 0,
        }}
      >
        FAQs
      </h2>

      <div
        ref={listRef}
        style={{ maxWidth: "1283px", margin: "0 auto" }}
      >
        {/* Top divider */}
        <div
          ref={(el) => {
            dividerRefs.current[0] = el;
          }}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        />

        {faqData.map((faq, idx) => (
          <div key={faq.id}>
            <div
              ref={(el) => {
                wrapperRefs.current[idx] = el;
              }}
              style={{ overflow: "hidden", margin: "0" }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(faq.id, idx)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "31px 40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <p
                  ref={(el) => {
                    questionRefs.current[idx] = el;
                  }}
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px, 1.4vw, 24px)",
                    color: "white",
                    margin: 0,
                    flex: 1,
                    textAlign: "left",
                    lineHeight: 1.3,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {faq.question}
                </p>

                {/* Icon wrapper */}
                <div
                  ref={(el) => {
                    iconBorderRefs.current[idx] = el;
                  }}
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "24px",
                    width: "48px",
                    height: "48px",
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Plus icon */}
                  <div
                    ref={(el) => {
                      plusIconRefs.current[idx] = el;
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 18V6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {/* Minus icon */}
                  <div
                    ref={(el) => {
                      minusIconRefs.current[idx] = el;
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H18"
                        stroke="#131313"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer — GSAP controls height */}
              <div
                ref={(el) => {
                  answerRefs.current[idx] = el;
                }}
                style={{
                  height: 0,
                  overflow: "hidden",
                  opacity: 0,
                }}
              >
                <div style={{ padding: "0 40px 40px" }}>
                  <p
                    style={{
                      fontFamily: "'Host Grotesk', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 1.05vw, 18px)",
                      color: "rgba(0,0,0,0.6)",
                      margin: 0,
                      lineHeight: 1.3,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom divider after each item */}
            <div
              ref={(el) => {
                dividerRefs.current[idx + 1] = el;
              }}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer({ onBackToTop }: { onBackToTop: () => void }) {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 90%",
          once: true,
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        background: "#131313",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(12.5rem, 14vw, 17rem)",
        paddingBottom: "clamp(60px, 5.8vw, 100px)",
        paddingLeft: "clamp(24px, 6.9vw, 120px)",
        paddingRight: "clamp(24px, 6.9vw, 120px)",
        boxSizing: "border-box",
      }}
    >
      {/* Dot pattern — exact Figma SVG, scaled full-width */}
      <div style={{
        position: "absolute",
        top: "clamp(-3rem, -5.5vw, -5.8125rem)",
        left: 0, right: 0,
        height: "clamp(9rem, 12vw, 16.3125rem)",
        pointerEvents: "none", overflow: "hidden",
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1726 261" fill="none" preserveAspectRatio="xMidYMid slice">
          <g clipPath="url(#dp-clip)">
            {/* Row 1 — r 32.33 */}
            {[3.33,52.48,101.63,150.79,199.94,249.09,298.24,347.40,396.55,445.70,494.86,544.01,593.16,642.31,691.47,740.62,789.77,838.92,888.08,937.23,986.38,1035.53,1084.69,1133.84,1182.99,1232.15,1281.30,1330.45,1379.60,1428.76,1477.91,1527.06,1576.21,1625.37,1674.52,1723.67].map((cx, i) => (
              <circle key={`r1-${i}`} cx={cx} cy="23.74" r="32.33" fill="#07522E" />
            ))}
            {/* Row 2 — r 27.55 */}
            {[3.33,52.48,101.63,150.79,199.94,249.09,298.24,347.40,396.55,445.70,494.86,544.01,593.16,642.31,691.47,740.62,789.77,838.92,888.08,937.23,986.38,1035.53,1084.69,1133.84,1182.99,1232.15,1281.30,1330.45,1379.60,1428.76,1477.91,1527.06,1576.22,1625.37,1674.52,1723.67].map((cx, i) => (
              <circle key={`r2-${i}`} cx={cx} cy="83.61" r="27.55" fill="#07522E" />
            ))}
            {/* Row 3 — r 23.42 */}
            {[3.33,52.48,101.63,150.79,199.94,249.09,298.24,347.40,396.55,445.70,494.85,544.01,593.16,642.31,691.47,740.62,789.77,838.92,888.08,937.23,986.38,1035.53,1084.69,1133.84,1182.99,1232.15,1281.30,1330.45,1379.60,1428.76,1477.91,1527.06,1576.21,1625.37,1674.52,1723.67].map((cx, i) => (
              <circle key={`r3-${i}`} cx={cx} cy="134.58" r="23.42" fill="#07522E" />
            ))}
            {/* Row 4 — r 19.90 */}
            {[3.33,52.48,101.63,150.79,199.94,249.09,298.24,347.40,396.55,445.70,494.85,544.01,593.16,642.31,691.47,740.62,789.77,838.92,888.08,937.23,986.38,1035.53,1084.69,1133.84,1182.99,1232.15,1281.30,1330.45,1379.60,1428.76,1477.91,1527.06,1576.21,1625.37,1674.52,1723.67].map((cx, i) => (
              <circle key={`r4-${i}`} cx={cx} cy="177.90" r="19.90" fill="#07522E" />
            ))}
            {/* Row 5 — r 16.92 */}
            {[3.33,52.48,101.63,150.79,199.94,249.09,298.24,347.40,396.55,445.70,494.86,544.01,593.16,642.31,691.47,740.62,789.77,838.92,888.08,937.23,986.38,1035.54,1084.69,1133.84,1182.99,1232.15,1281.30,1330.45,1379.60,1428.76,1477.91,1527.06,1576.22,1625.37,1674.52,1723.67].map((cx, i) => (
              <circle key={`r5-${i}`} cx={cx} cy="214.73" r="16.92" fill="#07522E" />
            ))}
            {/* Row 6 — r 14.38 */}
            {[3.33,52.48,101.63,150.79,199.94,249.09,298.24,347.40,396.55,445.70,494.85,544.01,593.16,642.31,691.47,740.62,789.77,838.92,888.08,937.23,986.38,1035.53,1084.69,1133.84,1182.99,1232.15,1281.30,1330.45,1379.60,1428.76,1477.91,1527.06,1576.22,1625.37,1674.52,1723.67].map((cx, i) => (
              <circle key={`r6-${i}`} cx={cx} cy="246.03" r="14.38" fill="#07522E" />
            ))}
          </g>
          <defs>
            <clipPath id="dp-clip">
              <rect width="1726" height="261" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div
        ref={contentRef}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(24px, 2.3vw, 40px)",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(12px, 1vw, 16px)",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                height: "79px",
                width: "66px",
                position: "relative",
              }}
            >
              <svg
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                }}
                fill="none"
                viewBox="0 0 65.641 79.113"
              >
                <path d={svgPaths.p13d56c00} fill="#49D899" />
                <path d={svgPaths.p39120f00} fill="#318DF8" />
                <path d={svgPaths.p2b041d00} fill="#318DF8" />
                <circle
                  cx="13.0081"
                  cy="14.2618"
                  fill="#FFD512"
                  r="8.8382"
                />
                <circle
                  cx="32.6561"
                  cy="14.2618"
                  fill="#EA520F"
                  r="8.8382"
                />
                <path d={svgPaths.p1dace00} fill="#318DF8" />
              </svg>
            </div>
            <div
              style={{ color: "white", textAlign: "center" }}
            >
              <div
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(18px, 1.5vw, 26px)",
                }}
              >
                Youth Privacy
              </div>
              <div
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.2vw, 20px)",
                }}
              >
                Community
              </div>
            </div>
          </div>

          <p
            style={{
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.05vw, 18px)",
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              maxWidth: "804px",
              margin: 0,
              lineHeight: "normal",
            }}
          >
            YPC is where digital sovereignty meets youth
            culture. We are empowering 10 million young people
            to take absolute control of their data and embrace
            privacy as a lifestyle.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {[
              {
                viewBox: "0 0 24 24",
                paths: [
                  <path
                    key="a"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={svgPaths.p3fa7fa80}
                    fill="white"
                  />,
                  <path
                    key="b"
                    d={svgPaths.pa2bff00}
                    fill="#131313"
                  />,
                ],
              },
              {
                viewBox: "0 0 24 24",
                paths: [
                  <path
                    key="a"
                    d={svgPaths.p2067ad80}
                    fill="white"
                  />,
                ],
              },
              {
                viewBox: "0 0 24 24",
                paths: [
                  <path
                    key="a"
                    d={svgPaths.p35d17b00}
                    fill="white"
                  />,
                ],
              },
              {
                viewBox: "0 0 20 20",
                paths: [
                  <path
                    key="a"
                    d={svgPaths.p13132a00}
                    fill="white"
                  />,
                ],
              },
            ].map((icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "16px",
                  display: "flex",
                  textDecoration: "none",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox={icon.viewBox}
                  fill="none"
                >
                  {icon.paths}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col items-center gap-4 md:flex-row md:justify-between"
          style={{ width: "100%" }}
        >
          <p
            style={{
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(13px, 1.05vw, 18px)",
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            © YPC® 2026. All Rights Reserved.
          </p>
          <button
            onClick={onBackToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "white",
              fontFamily: "'Host Grotesk', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(13px, 1.05vw, 18px)",
              padding: 0,
            }}
          >
            Back to top
            <div
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 9.03267 11.0001"
                fill="none"
                style={{ transform: "rotate(180deg)" }}
              >
                <path
                  d="M4.5164 10.5V0.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={svgPaths.p2f7d70c0}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const scrollToFaq = () => {
    document
      .getElementById("faq-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <HeroSection onScrollToStories={scrollToFaq} />
      <div id="faq-section">
        <FaqSection />
      </div>
      <Footer onBackToTop={scrollToTop} />
    </div>
  );
}