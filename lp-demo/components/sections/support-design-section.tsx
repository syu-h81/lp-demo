import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const supportItems = [
  {
    title: "地震予測・防災情報",
    description: "いつもの生活の中で、\n備えのきっかけをつくる",
  },
  {
    title: "家電保障\n(修理費用保険)",
    description: "万が一の\n破損・故障・修理費を支える",
  },
];

export function SupportDesignSection() {
  return (
    <section className={`${notoSansJp.className} bg-[#efefef] px-5 py-16 sm:px-8 sm:py-20 lg:py-24`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="max-w-4xl">
          <h2 className="bg-gradient-to-b from-[#0b2a4a] to-[#071b30] bg-clip-text text-[2.8rem] font-bold leading-[1.08] tracking-[-0.05em] text-transparent sm:text-[4rem] sm:leading-[1.12]">
            <span className="block">予測で「気づける」</span>
            <span className="block">補償で「折れない」</span>
          </h2>
          <p className="mt-6 text-2xl font-bold leading-[1.3] tracking-[-0.02em] text-[#1f1f1f] sm:text-[2rem]">
            防災レスキューは、次の2つをワンセットにしました。
          </p>
        </div>

        <div className="mt-12 grid w-full max-w-2xl gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-4">
          {supportItems.map((item) => (
            <div key={item.title} className="flex justify-center">
              <div
                className="flex aspect-square w-full max-w-[320px] flex-col items-center justify-center bg-[#f8e800] px-8 text-center text-black sm:max-w-[360px] sm:px-10"
                style={{
                  clipPath:
                    "polygon(50% 0%, 86% 15%, 100% 50%, 86% 85%, 50% 100%, 14% 85%, 0% 50%, 14% 15%)",
                }}
              >
                <h3 className="whitespace-pre-line text-[1.85rem] font-bold leading-[1.25] tracking-[-0.02em] text-[#111111] sm:text-[2rem]">
                  {item.title}
                </h3>
                <p className="mt-4 whitespace-pre-line text-[1.35rem] font-normal leading-[1.4] tracking-[-0.01em] text-black sm:text-[1.5rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-3xl text-[2rem] font-bold leading-[1.25] tracking-[-0.02em] text-[#1f1f1f] sm:mt-16 sm:text-[2.5rem]">
          <span className="block">「不安」を増やすのではなく、</span>
          <span className="block">行動しやすい安心に変える設計です。</span>
        </p>
      </div>
    </section>
  );
}
