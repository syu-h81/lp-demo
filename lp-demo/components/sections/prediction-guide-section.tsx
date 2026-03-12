import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["700"],
});

const heroImage =
  "https://www.figma.com/api/mcp/asset/4c31300f-989b-47a4-8ff6-8ebac491829c";

const points = [
  "予測・結果は 毎週火曜日・金曜日の更新予定\n（新たな予測・結果がない場合は更新なし）",
  "予測は地域・期間・マグニチュードの3つの観点で提示されます",
  "提供される地震情報は、全ての地震を完全に予測するものではありません",
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

export function PredictionGuideSection() {
  return (
    <section
      className={`${notoSansJp.className} relative overflow-hidden bg-[#0b2a4a] px-5 py-16 text-white sm:px-8 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-6xl pb-20">
        <div className="text-center">
          <h2 className="text-[2.35rem] font-bold leading-[1.17] tracking-[-0.03em] sm:text-[3rem]">
            <span className="block">地震予測は「当てる」より、</span>
            <span className="block">「備えのスイッチ」にする。</span>
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-lg font-bold leading-[1.55] sm:text-2xl sm:leading-[1.4]">
            地震は予測が難しい領域です。だからこそ、防災レスキューは
            <br className="hidden sm:block" />
            “怖がらせる情報”ではなく、備えを始めるきっかけとして情報を活用します。
          </p>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:mt-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div className="space-y-6">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-4 sm:gap-6">
                <div className="pt-1 text-white">
                  <CheckIcon />
                </div>
                <p className="whitespace-pre-line text-xl font-bold leading-[1.33] sm:text-2xl">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[24px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={heroImage}
              alt="火山地帯の風景"
              className="h-full w-full object-cover"
            />
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
