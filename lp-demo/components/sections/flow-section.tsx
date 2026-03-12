import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const steps = [
  {
    number: "01",
    title: "お申し込み",
    description: "お申し込み後、利用開始までスムーズに進められます。",
  },
  {
    number: "02",
    title: "各種ご相談対応",
    description:
      "お客様のお困りごとに対し、専門スタッフが対応させていただきます。",
  },
  {
    number: "03",
    title: "完了・ご紹介",
    description:
      "お客様のお困りごとを解決。必要に応じて新料金プランのご紹介をいたします。",
  },
];

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <div className="min-w-[72px] text-center leading-none text-[#0b2a4a] sm:min-w-[92px]">
        <div className="text-[1.9rem] tracking-[-0.08em] sm:text-[2rem]">STEP</div>
        <div className="-mt-1 text-[4.4rem] tracking-[-0.08em] sm:text-[5.6rem]">
          {number}
        </div>
      </div>

      <div className="pt-3 sm:pt-4">
        <h3 className="text-[2rem] font-bold leading-[1.25] tracking-[-0.02em] text-black sm:text-[2.25rem]">
          {title}
        </h3>
        <p className="mt-2 max-w-3xl text-xl leading-[1.4] text-black sm:text-2xl sm:leading-[1.33]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FlowSection() {
  return (
    <section
      className={`${notoSansJp.className} relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24`}
    >
      <div className="mx-auto max-w-4xl pb-20">
        <div className="text-center">
          <h2 className="bg-gradient-to-b from-[#0b2a4a] to-[#071b30] bg-clip-text text-[2.6rem] font-bold leading-[1.17] text-transparent sm:text-[3rem]">
            ご利用の流れ
          </h2>
          <p className="mt-2 text-xl font-normal leading-[1.33] text-black sm:text-2xl">
            はじめ方は、かんたん3ステップ。
          </p>
        </div>

        <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
          {steps.map((step) => (
            <StepItem key={step.number} {...step} />
          ))}
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
