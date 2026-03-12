import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["700"],
});

const reasons = [
  {
    text: "防災情報は見ても、\n結局「何をすればいいか」まで落とし込めない",
    avatar:
      "https://www.figma.com/api/mcp/asset/5ace329e-552e-428c-bb27-2331a95368ba",
    align: "left",
    flushTop: true,
  },
  {
    text: "地震が怖いけど、毎日忙しくて備えが続かない",
    avatar:
      "https://www.figma.com/api/mcp/asset/3a838d49-ef5b-44b0-a2fd-5759e2de7956",
    align: "right",
    flushTop: false,
  },
  {
    text: "いざという時、家電が壊れたら出費が怖い\n（冷蔵庫・洗濯機の修理は特に痛い）",
    avatar:
      "https://www.figma.com/api/mcp/asset/9f71c9b1-a0e8-478a-9c8a-458be20902c9",
    align: "left",
    flushTop: true,
  },
  {
    text: "情報も手続きもバラバラで、緊急時ほど迷う",
    avatar:
      "https://www.figma.com/api/mcp/asset/f71a95c4-7a5a-42b9-b3b4-7787bd0ef8f2",
    align: "right",
    flushTop: false,
  },
];

type Reason = (typeof reasons)[number];

function ReasonRow({ align, avatar, text, flushTop }: Reason) {
  const isRight = align === "right";

  return (
    <div className="flex w-full items-center justify-center gap-4 md:gap-[45px]">
      {!isRight && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt=""
            className="hidden size-20 shrink-0 rounded-full md:block md:size-[110px] lg:size-[130px]"
          />
        </>
      )}

      <div
        className={`relative bg-[#efefef] px-5 py-5 text-center text-lg font-bold leading-[1.45] text-[#0b2a4a] md:px-10 md:text-[1.75rem] md:leading-[1.4] lg:h-[108px] ${
          isRight
            ? "w-full md:max-w-[699px]"
            : "w-full md:max-w-[699px]"
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute top-1/2 hidden h-0 w-0 -translate-y-1/2 border-y-[10px] border-y-transparent md:block ${
            isRight
              ? "-right-[10px] border-l-[10px] border-l-[#efefef]"
              : "-left-[10px] border-r-[10px] border-r-[#efefef]"
          }`}
        />
        <span
          className={`whitespace-pre-line lg:block ${flushTop ? "lg:pt-0" : "lg:pt-[14px]"}`}
        >
          {text}
        </span>
      </div>

      {isRight && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt=""
            className="hidden size-20 shrink-0 rounded-full md:block md:size-[110px] lg:size-[130px]"
          />
        </>
      )}
    </div>
  );
}

export function ReasonSection() {
  return (
    <section
      className={`${notoSansJp.className} relative overflow-hidden bg-gradient-to-r from-[#07244a] via-[#002a58] to-[#07244a] text-white`}
    >
      <div className="px-5 pb-28 pt-16 sm:px-8 sm:pb-32 sm:pt-20 lg:px-[120px] lg:pb-40 lg:pt-[120px]">
        <div className="text-center">
          <p className="text-[1.75rem] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[2rem]">
            備えたいのに、備えられない...
          </p>
          <h2 className="mt-2 text-[2.35rem] font-bold leading-[1.17] tracking-[-0.03em] sm:text-[3rem]">
            よくある理由はこれです。
          </h2>
        </div>

        <div className="mt-12 w-full space-y-6 sm:mt-14 sm:space-y-7 lg:mt-16 lg:space-y-12">
          {reasons.map((reason) => (
            <ReasonRow key={reason.text} {...reason} />
          ))}
        </div>

        <p className="mt-14 text-center text-[2rem] font-bold leading-[1.25] tracking-[-0.02em] sm:mt-16 sm:text-[2.25rem]">
          “分かってるけど進まない”を、
          <br />
          仕組みで解決します。
        </p>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-20 w-full bg-[#efefef] sm:h-24 lg:h-[106px]"
        style={{ clipPath: "polygon(0 22%, 50% 100%, 100% 22%, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
