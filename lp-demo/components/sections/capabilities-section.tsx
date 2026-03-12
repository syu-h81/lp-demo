import { Noto_Sans_JP } from "next/font/google";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["700"],
});

const items = [
  {
    title: "家電の落下・破損・\n自然故障などに備える\n修理費用保険\n(上限50万円)",
    icon: <HouseIcon />,
  },
  {
    title: "地殻変動情報に\n基づく地震予測情報\nの閲覧",
    icon: <ClipboardIcon />,
  },
  {
    title: "予測・結果の定期更\n新で、備えの\nタイミングを\nつかみやすく",
    icon: <HandshakeIcon />,
  },
];

function HouseIcon() {
  return (
    <svg viewBox="0 0 120 110" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
      <path
        d="M18 52 60 22l42 30"
        fill="none"
        stroke="#2d1d1d"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 48v42h68V48"
        fill="#ffffff"
        stroke="#2d1d1d"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path d="M49 58h14v32H49z" fill="#77d0f4" stroke="#2d1d1d" strokeWidth="4" />
      <path d="M76 56h11v15H76z" fill="#77d0f4" stroke="#2d1d1d" strokeWidth="4" />
      <path d="M76 32h11v14H76z" fill="#77d0f4" stroke="#2d1d1d" strokeWidth="4" />
      <path d="m12 48 48-34 48 34" fill="none" stroke="#2d1d1d" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
      <path d="M27 18h66v84H27z" fill="#fff" stroke="#2d1d1d" strokeWidth="4" />
      <path
        d="M45 17c0-7 5-12 15-12s15 5 15 12h10v14H35V17h10Z"
        fill="#fff"
        stroke="#2d1d1d"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="17" r="4" fill="#fff" stroke="#2d1d1d" strokeWidth="4" />
      <path d="m40 43 5 6 9-13M40 60l5 6 9-13M40 77l5 6 9-13" fill="none" stroke="#77d0f4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 42h18M60 59h18M60 76h18" fill="none" stroke="#2d1d1d" strokeWidth="4" strokeLinecap="round" />
      <path d="m81 82 17-22 9 7-17 22-10 4Z" fill="#77d0f4" stroke="#2d1d1d" strokeWidth="4" strokeLinejoin="round" />
      <path d="m95 57 11 9" fill="none" stroke="#2d1d1d" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg viewBox="0 0 140 110" className="h-24 w-24 sm:h-28 sm:w-28" aria-hidden="true">
      <path d="M21 20c10 12 21 16 39 16 12 0 19-5 28-13 8-7 17-8 31-6" fill="none" stroke="#2d1d1d" strokeWidth="4" strokeLinecap="round" />
      <path d="m45 48 11-10c5-5 13-5 18 0l11 11c4 4 4 11 0 15-4 4-11 4-15 0L59 53" fill="#fff" stroke="#2d1d1d" strokeWidth="4" strokeLinejoin="round" />
      <path d="m39 45-9 9c-5 5-5 13 0 18 5 5 13 5 18 0l8-8" fill="#fff" stroke="#2d1d1d" strokeWidth="4" strokeLinejoin="round" />
      <path d="m72 50 9-9c5-5 13-5 18 0l8 8c5 5 5 13 0 18s-13 5-18 0l-9-9" fill="#fff" stroke="#2d1d1d" strokeWidth="4" strokeLinejoin="round" />
      <path d="m56 61 10 10c5 5 13 5 18 0" fill="none" stroke="#2d1d1d" strokeWidth="4" strokeLinecap="round" />
      <path d="M43 10v-8M59 8l3-7M81 8l-3-7" fill="none" stroke="#77d0f4" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function CapabilitiesSection() {
  return (
    <section className={`${notoSansJp.className} bg-[#fafafa] px-5 py-16 sm:px-8 sm:py-20 lg:py-24`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-[2.65rem] font-bold leading-[1.12] tracking-[-0.05em] text-[#082645] sm:text-[4rem]">
          防災レスキューでできること
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-3 lg:mt-14 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex aspect-square flex-col items-center justify-start rounded-full bg-[#ff9100] px-6 pb-8 pt-8 text-center text-white sm:px-8"
            >
              <div className="flex h-28 items-end justify-center sm:h-32">{item.icon}</div>
              <p className="mt-5 whitespace-pre-line text-[1.9rem] font-bold leading-[1.25] tracking-[-0.02em] sm:text-[2rem]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
