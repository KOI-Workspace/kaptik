"use client";

const problems = [
  "Inaccurate subtitles that miss K-pop slang and fandom terms",
  "No way to tell who is speaking — just a wall of text",
  "Often no subtitles at all on lives, Bubble, and other platforms",
];

const solutions = [
  "Accurate speech recognition + K-pop glossary for customized, precise subtitles",
  "Speaker identification so you always know who said what",
  "Works everywhere — any device, any platform",
];

export default function WhyKaptik() {
  return (
    <section id="features" className="relative px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1360px]">
        <h2
          className="mb-16 text-center text-[clamp(30px,4vw,42px)] font-bold leading-tight tracking-tight"
          style={{
            color: "#111327",
            letterSpacing: "-0.03em",
          }}
        >
          Why Kaptik?
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Problems */}
          <div
            className="rounded-[24px] p-8 backdrop-blur-[14px]"
            style={{
              background: "rgba(255,255,255,0.78)",
              boxShadow: "0 12px 30px rgba(26,31,56,0.08)",
              border: "1px solid rgba(255,255,255,0.55)",
            }}
          >
            <h3
              className="mb-6 text-lg font-semibold"
              style={{ color: "#6E7284" }}
            >
              The problem
            </h3>
            <ul className="space-y-4">
              {problems.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[16px] leading-relaxed"
                  style={{ color: "#23263A" }}
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#5F667C" }}
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div
            className="rounded-[24px] p-8 backdrop-blur-[14px]"
            style={{
              background: "rgba(255,255,255,0.78)",
              boxShadow: "0 12px 30px rgba(26,31,56,0.08)",
              border: "1px solid rgba(255,255,255,0.55)",
            }}
          >
            <h3
              className="mb-6 text-lg font-semibold"
              style={{ color: "#6E7284" }}
            >
              Our solution
            </h3>
            <ul className="space-y-4">
              {solutions.map((text, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[16px] leading-relaxed"
                  style={{ color: "#23263A" }}
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "#5E4CE6" }}
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
