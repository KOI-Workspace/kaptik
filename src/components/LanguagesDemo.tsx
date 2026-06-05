"use client";

/* ──────────────────────────────────────────────────────────────
   "30+ languages" 기능을 보여주는 폰 목업.
   Live·Link 데모와 동일한 폰 프레임을 재사용하고,
   안쪽에 30+ 언어 자막 데모 영상을 풀스크린으로 재생한다.
   ────────────────────────────────────────────────────────────── */

export default function LanguagesDemo() {
  return (
    <div className="flex w-full justify-center">
      {/* 폰 프레임 — LiveSubtitleDemo와 동일한 스타일로 톤을 맞춘다 */}
      <div className="relative aspect-[9/19.5] h-[min(64vh,560px)] rounded-[34px] bg-[#050505] p-[7px] shadow-[0_28px_80px_rgba(10,10,10,0.24),0_8px_22px_rgba(10,10,10,0.16)] ring-1 ring-[#262626]">
        {/* 노치 */}
        <div className="pointer-events-none absolute left-1/2 top-[8px] z-30 h-[20px] w-[30%] -translate-x-1/2 rounded-b-[14px] bg-[#050505]" />

        <div className="relative h-full overflow-hidden rounded-[28px] bg-black">
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            {/* MOV(H.264) 컨테이너이지만 mp4 타입으로 지정해 브라우저 호환성을 높인다 */}
            <source src="/videos/30+languagesvid.MOV" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
