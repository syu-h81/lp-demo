import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const coverageRows = [
  ["保険金額", "1事故あたり上限50万円"],
  ["年間保険回数", "無制限"],
  ["対象事故", "物損＋自然故障"],
  ["修理不能時", "購入金額または保険金額の小さい方"],
  [
    "対象機器例",
    "テレビ／冷蔵庫／洗濯機／電子レンジ／ヘアドライヤー（購入から5年以内）",
  ],
  ["盗難", "有"],
];

const easyPoints = [
  "Web請求フォームから申請でき、郵送対応は不要の案内",
  "保険金請求から受け取りまで 最短7日の記載",
  "引受保険会社の問い合わせ窓口\n（受付時間10:00〜19:00、年末年始除く）",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true">
      <path
        d="m5 12 4 4 10-11"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CoverageDetailsSection() {
  return (
    <section
      className={`${notoSansJp.className} relative overflow-hidden bg-[#fafafa] px-5 py-16 text-[#1f1f1f] sm:px-8 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-5xl pb-20">
        <div className="text-center">
          <p className="text-[1.75rem] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[2rem]">
            災害時だけじゃない!
          </p>
          <h2 className="mt-2 text-[2.5rem] font-bold leading-[1.17] tracking-[-0.03em] sm:text-[3rem] lg:text-[3.5rem]">
            日常の家電トラブルにも、強い。
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg font-normal leading-[1.5] sm:text-2xl sm:leading-[1.33]">
            落下・破損・故障。家電のトラブルは、生活の停止につながります。
            <br className="hidden sm:block" />
            防災レスキューは、家電保障（修理費用保険）で家計と生活の両方を守ります。
          </p>
        </div>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-center text-[2rem] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[2.25rem]">
            補償のポイント
          </h3>

          <div className="mt-6 border-t border-[#bfbfbf]">
            {coverageRows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-3 border-b border-[#bfbfbf] px-0 py-5 sm:grid-cols-[210px_1fr] sm:gap-6 sm:px-5 sm:py-6"
              >
                <div className="text-[2rem] font-bold leading-[1.25] tracking-[-0.02em] text-[#ff8900]">
                  {label}
                </div>
                <div className="text-[1.75rem] font-normal leading-[1.35] tracking-[-0.02em] text-black">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-center text-[2rem] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[2.25rem]">
            申請がラク!
          </h3>

          <div className="mt-6 space-y-5 sm:space-y-6">
            {easyPoints.map((point) => (
              <div key={point} className="flex items-start gap-4">
                <div className="pt-1 text-black">
                  <CheckIcon />
                </div>
                <p className="whitespace-pre-line text-xl font-bold leading-[1.33] sm:text-2xl">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-20 w-full bg-[#efefef] sm:h-24 lg:h-[106px]"
        style={{ clipPath: "polygon(0 22%, 50% 100%, 100% 22%, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
