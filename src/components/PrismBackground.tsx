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
      className="fixed inset-0 z-0"
      style={{
        pointerEvents: "none",
        opacity: 0.55,
        mixBlendMode: "soft-light",
      }}
      aria-hidden
    >
      <Prism
        animationType="rotate"
        timeScale={0.4}
        height={3.5}
        baseWidth={5.5}
        scale={3.6}
        hueShift={0.15}
        colorFrequency={0.7}
        noise={0}
        glow={0.4}
        bloom={0.8}
        suspendWhenOffscreen
        transparent
      />
    </div>
  );
}
