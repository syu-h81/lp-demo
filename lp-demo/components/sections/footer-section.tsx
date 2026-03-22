import Image from "next/image";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const footerBackgroundImage = "/images/footer-bg.png";

export function FooterSection() {
  return (
    <footer className={`${notoSansJp.className} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <Image
          src={footerBackgroundImage}
          alt=""
          fill
          className="h-full w-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center text-white sm:min-h-[620px] sm:px-8 sm:py-24 lg:min-h-[640px]">
        <h2 className="text-[2.8rem] font-bold leading-[1.08] tracking-[-0.05em] sm:text-[4rem] sm:leading-[1.12]">
          <span className="block">不安を増やすより、</span>
          <span className="block">備えを増やそう。</span>
        </h2>

        <p className="mt-6 max-w-5xl text-lg font-bold leading-[1.5] sm:text-2xl sm:leading-[1.33]">
          地震は、考えないようにすると、備えも止まります。
          <br className="hidden sm:block" />
          防災レスキューは、予測情報で“備えのスイッチ”を押し、家電保障で“生活が止まる不安”を支えます。
          <br className="hidden sm:block" />
          家族と暮らしの安心を、今日から。
        </p>
      </div>
    </footer>
  );
}
