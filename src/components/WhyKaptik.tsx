"use client";

import LiveSubtitleDemo from "./LiveSubtitleDemo";
import LinkSubtitleDemo from "./LinkSubtitleDemo";
import LanguagesDemo from "./LanguagesDemo";
import SpeakerContextDemo from "./SpeakerContextDemo";
import DevicesDemo from "./DevicesDemo";

const solutionFeatures = [
  {
    id: "live",
    eyebrow: "Live subtitles",
    title: "No more waiting for official subtitles.",
    description:
      "Get notified when your favorite artists go live on Weverse or YouTube. Watch with high-quality subtitles in real time, and come back anytime, every subtitle is saved for later.",
    imageSide: "right",
  },
  {
    id: "link",
    eyebrow: "On any platform",
    title: "Paste any link.\nGet subtitles in one click.",
    description:
      "Kaptik works with videos from YouTube, Instagram, TikTok, and more. Just paste the link and turn any K-pop video into a fully subtitled experience.",
    imageSide: "left",
  },
  {
    id: "context",
    eyebrow: "Cultural context",
    title: "Catch every joke, slang, and hidden meaning your bias says.",
    description:
      "Kaptik adds human written explanations from our teammates for jokes, slang, fandom terms, and cultural references that regular subtitles often miss.",
    imageSide: "right",
  },
  {
    id: "languages",
    eyebrow: "30+ languages",
    title: "Watch the content in your own language.",
    description:
      "Don't wait for English only subtitles. Enjoy K-pop content in your own language and feel every moment the way it's meant to be.",
    imageSide: "left",
  },
  {
    id: "devices",
    eyebrow: "On any device",
    title: "Watch anywhere,\non any device.",
    description:
      "Use Kaptik on iOS, Android, tablets, desktop browsers, and TV with the same subtitle experience wherever you watch.",
    imageSide: "right",
  },
];

export default function WhyKaptik() {
  return (
    <section id="features" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-5 md:px-12 lg:px-16">
        <h2
          className="mx-auto mb-8 hidden max-w-[820px] text-center text-[clamp(30px,8vw,44px)] font-bold leading-tight tracking-tight md:mb-12 md:block md:text-[clamp(34px,4vw,48px)]"
          style={{
            color: "#0A0A0A",
            letterSpacing: "-0.03em",
          }}
        >
          How we solve the problem
        </h2>
      </div>

      <div>
        {solutionFeatures.map((feature, index) => {
          // 각 기능별 실제 사용 장면을 보여주는 데모 목업.
          const media =
            feature.id === "live" ? (
              <LiveSubtitleDemo />
            ) : feature.id === "link" ? (
              <LinkSubtitleDemo />
            ) : feature.id === "languages" ? (
              <LanguagesDemo />
            ) : feature.id === "context" ? (
              <SpeakerContextDemo />
            ) : feature.id === "devices" ? (
              <DevicesDemo />
            ) : (
              <div
                className="flex aspect-[4/3] min-h-[280px] w-full items-center justify-center rounded-[16px] border border-dashed border-[#D4D4D4] bg-[#FAFAFA]"
                aria-hidden
              >
                <span className="text-sm text-[#A3A3A3]">이미지 자리</span>
              </div>
            );

          const textContent = (
            <div className="mx-auto flex max-w-[560px] flex-col items-center text-center md:mx-0 md:items-start md:text-left">
              <span
                className="mb-4 w-fit rounded-[999px] px-4 py-1.5 text-xs font-bold md:mb-5 md:px-5 md:py-2.5 md:text-base"
                style={{
                  background: "#F5F3FF",
                  color: "#6D28D9",
                }}
              >
                {feature.eyebrow}
              </span>
              <h3
                className="mb-4 whitespace-pre-line text-[clamp(30px,8.4vw,44px)] font-bold leading-[1.03] tracking-tight md:mb-5 md:text-[clamp(40px,4.4vw,60px)]"
                style={{
                  color: "#0A0A0A",
                  letterSpacing: "-0.03em",
                }}
              >
                {feature.title}
              </h3>
              <p className="max-w-[500px] text-[15px] leading-relaxed text-[#525252] md:text-[18px] lg:text-[19px]">
                {feature.description}
              </p>
            </div>
          );

          const textOrder =
            feature.imageSide === "left" ? "md:order-2" : "md:order-1";
          const mediaOrder =
            feature.imageSide === "left" ? "md:order-1" : "md:order-2";

          return (
            <article
              key={feature.title}
              className={`${index % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"} px-5 py-16 md:px-12 md:py-24 lg:px-16`}
            >
              <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:min-h-[560px] md:grid-cols-2 md:gap-16 lg:min-h-[600px] lg:gap-24">
                <div className={textOrder}>{textContent}</div>
                <div className={`flex justify-center ${mediaOrder}`}>{media}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
