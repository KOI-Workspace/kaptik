"use client";

import WaitlistForm from "./WaitlistForm";

interface HeroProps {
  onWaitlistSuccess: () => void;
}

export default function Hero({
  onWaitlistSuccess,
}: HeroProps) {
  return (
    <section
      className="relative px-6 pb-24 md:px-12 lg:px-16"
      style={{ paddingTop: "calc(88px + 56px)" }}
    >
      <div className="mx-auto max-w-[1360px]">
        {/* 상단: 헤드라인 + 이미지 2단 */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 왼쪽: 헤드라인 */}
          <div className="flex flex-col items-start text-left">
            <h1
              className="text-[clamp(34px,5vw,60px)] font-bold leading-[1.06] tracking-tight"
              style={{
                color: "#0A0A0A",
                letterSpacing: "-0.03em",
              }}
            >
              Sick of confusing K-pop subtitles?{" "}
              <span style={{ color: "#A3A3A3" }}>
                Catch every moment in your language.
              </span>
            </h1>
            <WaitlistForm onSuccess={onWaitlistSuccess} />
          </div>

          {/* 오른쪽: 이미지 자리 (추후 이미지로 교체) */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="flex aspect-square w-full max-w-[480px] items-center justify-center rounded-[16px] border border-dashed border-[#D4D4D4] bg-[#FAFAFA]"
              aria-hidden
            >
              <span className="text-sm" style={{ color: "#A3A3A3" }}>
                이미지 자리
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
