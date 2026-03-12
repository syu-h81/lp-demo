import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const heroBackgroundImage =
  "https://www.figma.com/api/mcp/asset/0cfb3807-1443-4257-8aa5-eacb616670c5";

const stripeBackground =
  "repeating-linear-gradient(120deg, #7d7d7d 0 40px, #7d7d7d 40px 68px, transparent 68px 128px), repeating-linear-gradient(120deg, #ebe169 68px 108px, #ebe169 108px 136px, transparent 136px 196px)";

export function HeroSection() {
  return (
    <section
      className={`${notoSansJp.className} overflow-hidden bg-[#ededed] px-0 pb-12 pt-0 sm:pb-16`}
    >
      <div
        aria-hidden="true"
        className="h-14 w-full bg-[length:168px_100%] sm:h-[90px]"
        style={{ backgroundImage: stripeBackground }}
      />

      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-9 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative flex min-h-[420px] flex-col items-center px-4 py-10 text-center text-white sm:min-h-[520px] sm:px-8 sm:py-16 lg:min-h-[620px] lg:px-16 lg:py-20">
            <div className="mt-4 w-full max-w-[780px] border-[3px] border-[#ffee00] px-4 py-5 shadow-[0_0_16px_rgba(255,238,0,0.86)] sm:mt-10 sm:px-8 sm:py-7 lg:border-4 lg:px-14 lg:py-9">
              <h1 className="text-[2.5rem] font-bold leading-[1.12] tracking-[-0.06em] text-white drop-shadow-[0_0_9px_rgba(255,255,255,0.7)] sm:text-[3.5rem] lg:text-[4rem]">
                地震の備えを、日常に
              </h1>
              <p className="mt-3 text-[1.5rem] font-bold leading-[1.25] tracking-[-0.03em] text-white drop-shadow-[0_0_9px_rgba(255,255,255,0.7)] sm:text-[2rem]">
                もしもの修理費も、想定内に
              </p>
            </div>

            <p className="mt-8 max-w-[729px] text-base leading-[1.6] text-white sm:mt-12 sm:text-xl sm:leading-[1.6] lg:text-2xl lg:leading-[1.33]">
              防災レスキューは、地震予測・防災情報で「備える行動」を後押しし、
              さらに家電保障（修理費用保険）で、落下・破損・故障などのトラブルにも備えられるサービスです。
              <br className="hidden sm:block" />
              「予測と補償」の両面から、家族と暮らしの安心を守ります。
            </p>

          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="mt-7 h-14 w-full bg-[length:168px_100%] sm:mt-10 sm:h-[90px]"
        style={{ backgroundImage: stripeBackground }}
      />
    </section>
  );
}
