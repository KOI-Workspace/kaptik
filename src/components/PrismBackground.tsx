"use client";

import Prism from "./Prism";

/**
 * 전체 페이지 배경용 Prism 레이어
 * - 텍스트 가독성: opacity 낮게, 하단 빛 약하게
 * - 세로: 하단 페이드 더 강하게 (너무 진하지 않게)
 * - 가로: 중앙 청록빛 띠 유지
 */
export default function PrismBackground() {
  return (
    <div
      className="fixed inset-0 z-[1]"
      style={{
        pointerEvents: "none",
        opacity: 0.65,
        isolation: "isolate",
        // 세로: 중앙 위쪽만 강하게, 하단은 빠르게 페이드 (너무 진하지 않게)
        maskImage: `linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.08) 75%, transparent 92%),
          linear-gradient(to right, black 0%, black 22%, rgba(0,0,0,0.85) 50%, black 78%, black 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.08) 75%, transparent 92%),
          linear-gradient(to right, black 0%, black 22%, rgba(0,0,0,0.85) 50%, black 78%, black 100%)`,
      }}
      aria-hidden
    >
      <Prism
        animationType="rotate"
        timeScale={0.4}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0.12}
        colorFrequency={0.7}
        noise={0}
        glow={0.55}
        bloom={0.75}
        lowerFadeMin={0.12}
        suspendWhenOffscreen
        transparent
      />
    </div>
  );
}
