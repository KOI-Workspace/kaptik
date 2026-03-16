"use client";

import { useState } from "react";
import { faqItems } from "@/lib/mockData";

interface FAQProps {
  onJoinWaitlist: () => void;
}

export default function FAQ({ onJoinWaitlist }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[800px]">
        <h2
          className="mb-4 text-center text-sm font-semibold uppercase tracking-widest"
          style={{
            color: "#6E7284",
          }}
        >
          FAQ
        </h2>

        <h3
          className="mb-6 text-center text-[clamp(28px,3.5vw,38px)] font-bold leading-tight tracking-tight"
          style={{
            color: "#111327",
            letterSpacing: "-0.03em",
          }}
        >
          About Kaptik
        </h3>

        <p
          className="mx-auto mb-12 max-w-[540px] text-center text-base leading-relaxed"
          style={{ color: "#6F7385" }}
        >
          Find out what Kaptik is, how it connects with your favorite K-pop
          platforms, and how you can bring studio-quality subtitles into your
          daily fandom life.
        </p>

        <div className="space-y-2">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[24px]"
              style={{
                background: "rgba(255,255,255,0.78)",
                backdropFilter: "blur(14px)",
                boxShadow: "0 12px 30px rgba(26,31,56,0.08)",
                border: "1px solid rgba(255,255,255,0.55)",
              }}
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/30 focus:outline-none"
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
              >
                <span
                  className="text-base font-medium md:text-[17px]"
                  style={{ color: "#23263A" }}
                >
                  {item.question}
                </span>
                <span
                  className="ml-4 shrink-0 transition-transform"
                  style={{
                    transform: openId === item.id ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className="grid transition-[grid-template-rows] duration-200 ease-in-out"
                style={{
                  gridTemplateRows: openId === item.id ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <p
                    className="border-t px-6 py-5"
                    style={{
                      color: "#6F7385",
                      borderColor: "rgba(17,19,39,0.08)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
