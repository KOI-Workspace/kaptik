"use client";

/* ──────────────────────────────────────────────────────────────
   "Speaker and context" 기능을 보여주는 UI 데모.
   화자별 대사 + 그 아래에 떠 있는 cultural context 카드 두 세트를
   실제 Kaptik 자막 화면(다크)처럼 보여준다.
   ────────────────────────────────────────────────────────────── */

// 대사 한 줄을 일반 텍스트와 보라 밑줄 강조 구간으로 나눠 표현한다.
type Segment = { text: string; highlight?: boolean };

type Dialogue = {
  name: string; // 화자 이름
  initial: string; // 아바타에 표시할 이니셜
  color: string; // 화자 컬러 (이름·아바타)
  line: Segment[];
  context: { title: string; body: string };
};

const dialogues: Dialogue[] = [
  {
    name: "V",
    initial: "V",
    color: "#3B82F6",
    line: [
      { text: "The " },
      { text: "40-kilometers march", highlight: true },
      { text: "." },
    ],
    context: {
      title: "40km March",
      body: 'A grueling January basic-training march. V\'s "this time of year" instantly triggered military flashbacks.',
    },
  },
  {
    name: "Jin",
    initial: "JN",
    color: "#EC4899",
    line: [
      {
        text: "But if something feels weird, shouldn't you go to the dentist? Hahaha.",
        highlight: true,
      },
    ],
    context: {
      title: 'Dad joke on "이상하다"',
      body: '"Weird" in Korean (이상하다) sounds like a dental complaint. Jin turned J-Hope\'s observation into a dentist joke.',
    },
  },
];

export default function SpeakerContextDemo() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[360px] overflow-hidden rounded-[16px] border border-[#E5E5E5] bg-white shadow-[0_22px_60px_rgba(10,10,10,0.16),0_8px_22px_rgba(10,10,10,0.08)] sm:max-w-[390px] md:max-w-[420px]">
        <div className="flex items-center gap-3 border-b border-[#ECECEC] bg-[#F6F6F6] px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-3 py-1.5 ring-1 ring-[#E5E5E5]">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#A3A3A3]">
              <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
              <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className="truncate text-[11px] text-[#737373]">kaptik.app/context-demo</span>
          </div>
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] shadow-sm ring-2 ring-[#DDD6FE]">
            <span className="text-[12px] font-extrabold leading-none text-white">k</span>
          </span>
        </div>

        <div className="space-y-4 bg-[#FCFCFC] px-4 py-4 md:space-y-5 md:px-5 md:py-5">
          {dialogues.map((d) => (
            <div key={d.name}>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-bold sm:h-8 sm:w-8 sm:text-[11px]"
                  style={{
                    color: d.color,
                    background: `${d.color}14`,
                    boxShadow: `inset 0 0 0 1.5px ${d.color}55`,
                  }}
                >
                  {d.initial}
                </span>
                <span className="text-[13px] font-bold sm:text-[14px]" style={{ color: d.color }}>
                  {d.name}
                </span>
              </div>

              <p className="pl-9 text-[13px] font-semibold leading-snug text-[#0A0A0A] sm:pl-10 sm:text-[14px]">
                {d.line.map((seg, i) =>
                  seg.highlight ? (
                    <span
                      key={i}
                      className="text-[#8B5CF6] underline decoration-[#8B5CF6]/70 decoration-2 underline-offset-[2px]"
                    >
                      {seg.text}
                    </span>
                  ) : (
                    <span key={i}>{seg.text}</span>
                  )
                )}
              </p>

              <div className="ml-0 mt-2 rounded-[12px] border border-[#DDD6FE] bg-white p-2.5 shadow-[0_10px_22px_rgba(109,40,217,0.06)] sm:ml-9 sm:mt-2.5 sm:p-3">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h5 className="text-[12px] font-bold text-[#6D28D9] sm:text-[13px]">
                    {d.context.title}
                  </h5>
                  <svg
                    className="mt-0.5 shrink-0 text-[#A3A3A3]"
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M6 6l12 12M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-[11px] leading-relaxed text-[#525252] sm:text-[12px]">
                  {d.context.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
