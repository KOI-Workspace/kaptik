"use client";

import Prism from "./Prism";

/**
 * 전체 페이지 배경용 Prism 레이어
 * - fixed, 전체 뷰포트 커버
 * - z-index 0 (콘텐츠 아래)
 * - pointer-events: none
 * - opacity로 가독성 확보
 */
export default function PrismBackground() {
  return (
    <div
      className="fixed inset-0 z-[1]"
      style={{
        pointerEvents: "none",
        opacity: 0.75,
        isolation: "isolate",
        // 세로: 하단 빛나는 막대 많이 약하게 | 가로: 움직이는 양옆 막대 더 진하게
        maskImage: `linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 75%),
          linear-gradient(to right, black 0%, black 18%, rgba(0,0,0,0.55) 50%, black 82%, black 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, black 0%, black 35%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 75%),
          linear-gradient(to right, black 0%, black 18%, rgba(0,0,0,0.55) 50%, black 82%, black 100%)`,
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
        glow={0.7}
        bloom={0.9}
        suspendWhenOffscreen
        transparent
      />
    </div>
  );
}
