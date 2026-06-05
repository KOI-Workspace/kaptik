"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ──────────────────────────────────────────────────────────────
   "Live subtitles" 기능을 보여주는 애니메이션 폰 목업.
   3단계 시퀀스가 무한 반복된다.
   0) 알림   — Kaptik 앱에서 "BTS is now LIVE" 푸시 알림이 도착
   1) 홈     — 알림을 누르면 홈 화면(실제 앱 UI)으로 진입, Play 버튼에 탭 리플
   2) 영상   — 영상을 누르면 라이브 플레이어에 Kaptik 자막이 등장
   ────────────────────────────────────────────────────────────── */

// 각 단계가 유지되는 시간(ms)
const PHASE_DURATIONS = [3000, 2800, 4400];

export default function LiveSubtitleDemo() {
  const [phase, setPhase] = useState(0);

  // 단계별 시간이 다르므로 setTimeout으로 순환시킨다.
  useEffect(() => {
    const id = window.setTimeout(
      () => setPhase((p) => (p + 1) % PHASE_DURATIONS.length),
      PHASE_DURATIONS[phase]
    );
    return () => window.clearTimeout(id);
  }, [phase]);

  return (
    <div className="flex w-full justify-center">
      {/* 폰 프레임 — Hero의 목업 스타일을 재사용해 톤을 맞춘다 */}
      <div className="relative aspect-[9/19.5] h-[min(64vh,560px)] rounded-[34px] bg-[#050505] p-[7px] shadow-[0_28px_80px_rgba(10,10,10,0.24),0_8px_22px_rgba(10,10,10,0.16)] ring-1 ring-[#262626]">
        {/* 노치 */}
        <div className="pointer-events-none absolute left-1/2 top-[8px] z-30 h-[20px] w-[30%] -translate-x-1/2 rounded-b-[14px] bg-[#050505]" />

        <div className="relative h-full overflow-hidden rounded-[28px] bg-black">
          {/* ── 홈 화면(실제 앱 스크린샷) — 알림/영상 단계의 배경으로도 쓰인다 ── */}
          <Image
            src="/image/features/home exmaple UI.PNG"
            alt="Kaptik 홈 화면"
            fill
            sizes="(max-width: 1024px) 80vw, 30vw"
            className="object-cover transition-all duration-500"
            style={{
              filter: phase === 0 ? "brightness(0.55) blur(1.5px)" : "none",
              transform: phase === 1 ? "scale(1)" : "scale(1.02)",
            }}
            priority
          />

          {/* ── 단계 0: 푸시 알림 ── */}
          {phase === 0 && (
            <div className="absolute inset-x-0 top-0 z-20 px-3 pt-9">
              <div
                key="notif"
                className="kdemo-notif-in flex items-start gap-3 rounded-[20px] border border-white/40 bg-white/85 px-3.5 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                {/* 앱 아이콘 */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-sm">
                  <span className="text-[20px] font-extrabold leading-none text-white">k</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#525252]">
                      Kaptik
                    </span>
                    <span className="text-[11px] text-[#737373]">now</span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#EF4444]" />
                    <p className="truncate text-[13px] font-bold text-[#0A0A0A]">
                      BTS is now LIVE
                    </p>
                  </div>
                  <p className="mt-0.5 truncate text-[12px] leading-snug text-[#525252]">
                    아미랑 아리랑 · Tap to watch with subtitles
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── 단계 1: 홈 화면 + Play Subtitle 버튼 탭 리플 ── */}
          {phase === 1 && (
            <div className="pointer-events-none absolute inset-0 z-20">
              {/* 스크린샷의 보라색 'Play Subtitle' 버튼 위치(세로 약 83%)에 리플 */}
              <span
                key="ripple"
                className="kdemo-ripple absolute left-1/2 top-[83%] h-12 w-12 rounded-full bg-white/70"
              />
            </div>
          )}

          {/* ── 단계 2: 라이브 영상 플레이어 + Kaptik 자막 ── */}
          {phase === 2 && (
            <div key="video" className="kdemo-rise absolute inset-0 z-20 bg-black">
              <Image
                src="/image/herosection_mockupsideimages/bts1.jpg"
                alt="BTS 라이브"
                fill
                sizes="(max-width: 1024px) 80vw, 30vw"
                className="object-cover"
              />
              {/* 상하단 그라데이션으로 가독성 확보 */}
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* 상단 바: 뒤로가기 + LIVE 배지 + 시청자 수 */}
              <div className="absolute inset-x-0 top-0 flex items-center gap-3 px-4 pt-9">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex items-center gap-1.5 rounded-md bg-[#EF4444] px-2 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="text-[11px] font-bold uppercase tracking-wide text-white">Live</span>
                </div>
                <span className="text-[12px] font-medium text-white/90">12.4K watching</span>
              </div>

              {/* 하단: Kaptik 실시간 자막 */}
              <div className="absolute inset-x-0 bottom-0 px-4 pb-6">
                <div key={`sub-${phase}`} className="kdemo-sub-in">
                  <div className="mb-2 flex items-center gap-1.5">
                    <span className="flex items-center gap-1 rounded-[6px] bg-[#8B5CF6] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      <span className="text-[9px] font-extrabold">k</span> Kaptik
                    </span>
                    <span className="text-[11px] font-medium text-white/70">Live subtitles · EN</span>
                  </div>
                  <div className="rounded-[14px] bg-black/55 px-3.5 py-3 backdrop-blur-sm">
                    <div className="mb-1 flex items-center gap-1.5">
                      <span className="rounded-[5px] bg-white/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        Jimin
                      </span>
                    </div>
                    <p className="text-[14px] font-medium leading-snug text-white">
                      Did everyone wait long? We&apos;re finally live with ARMY 💜
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 하단 진행 인디케이터 — 현재 단계 표시 */}
          <div className="absolute inset-x-0 bottom-2.5 z-40 flex justify-center gap-1.5">
            {PHASE_DURATIONS.map((_, i) => (
              <span
                key={i}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: i === phase ? 18 : 6,
                  background: i === phase ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
