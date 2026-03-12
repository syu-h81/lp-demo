import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const faqs = [
  {
    question: "地震は必ず予測できますか？",
    answer:
      "いいえ。提供される地震情報は、すべての地震を完全に予測できるものではありません。",
  },
  {
    question: "更新頻度は？",
    answer:
      "予測・結果は毎週火曜日・金曜日の更新予定です（新たな予測・結果がない場合は更新されません）。",
  },
  {
    question: "家電保障は何が対象ですか？",
    answer:
      "例として、テレビ／冷蔵庫／洗濯機／電子レンジ／ヘアドライヤー（購入から5年以内）が対象機器として案内されています。",
  },
  {
    question: "補償金額はいくらまで？",
    answer: "1事故あたり上限50万円の記載があります。",
  },
  {
    question: "申請は難しいですか？",
    answer:
      "Web請求フォームで申請でき、郵送不要の案内があります。保険金請求から受け取りまで最短7日の記載もあります。",
  },
];

function MinusIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-[#181818]" aria-hidden="true">
      <path d="M2.5 8h11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-[20px_1px_1fr_16px] items-center gap-x-4 py-1">
        <div className="text-center text-[1.5rem] leading-[1.33] tracking-[-0.01em] text-[#1f1f1f]">
          Q
        </div>
        <div className="h-5 w-px bg-[#181818]" />
        <p className="text-[1.35rem] font-bold leading-[1.33] text-[#181818] sm:text-2xl">
          {question}
        </p>
        <MinusIcon />
      </div>

      <div className="grid grid-cols-[20px_1px_1fr] items-start gap-x-4 py-1">
        <div className="text-center text-[1.5rem] leading-[1.33] tracking-[-0.01em] text-[#1f1f1f]">
          A
        </div>
        <div className="h-5 w-px bg-[#181818]" />
        <p className="text-base font-medium leading-[1.5] text-[#181818] sm:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className={`${notoSansJp.className} bg-[#ededed] px-5 py-16 sm:px-8 sm:py-20 lg:py-24`}>
      <div className="mx-auto max-w-4xl">
        <h2 className="bg-gradient-to-b from-[#0b2a4a] to-[#071b30] bg-clip-text text-center text-[2.6rem] font-bold leading-[1.17] text-transparent sm:text-[3rem]">
          よくある質問
        </h2>

        <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
