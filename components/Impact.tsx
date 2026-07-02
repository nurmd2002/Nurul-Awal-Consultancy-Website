"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    end: 700,
    suffix: "+",
    label: "Businesses Supported",
    icon: "▥",
  },
  {
    end: 24,
    suffix: "+",
    label: "Years of Experience",
    icon: "◎",
  },
  {
    end: 99,
    suffix: "%",
    label: "Client Satisfaction",
    icon: "♡",
  },
];

function Counter({
  end,
  suffix = "",
  startCounting,
}: {
  end: number;
  suffix?: string;
  startCounting: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const duration = 2600;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, startCounting]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Impact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07582f] px-10 py-28 text-white"
    >
      {/* soft green glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(23,125,63,0.9),rgba(4,62,32,1)_70%)]" />

      {/* left line art */}
      <div className="absolute left-[-120px] top-24 h-[560px] w-[360px] rounded-full border border-[#b9d87a]/20" />
      <div className="absolute left-[-95px] top-28 h-[540px] w-[340px] rounded-full border border-[#b9d87a]/15" />
      <div className="absolute left-[-70px] top-32 h-[520px] w-[320px] rounded-full border border-[#b9d87a]/10" />

      {/* right line art */}
      <div className="absolute right-[-130px] bottom-0 h-[560px] w-[360px] rounded-full border border-[#b9d87a]/20" />
      <div className="absolute right-[-105px] bottom-5 h-[540px] w-[340px] rounded-full border border-[#b9d87a]/15" />
      <div className="absolute right-[-80px] bottom-10 h-[520px] w-[320px] rounded-full border border-[#b9d87a]/10" />

      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="text-center">
          <div className="mb-6 flex items-center justify-center gap-6">
            <span className="h-px w-36 bg-[#c7df8a]/35" />
            <p className="font-serif text-2xl text-[#c7df8a]">Our Impact</p>
            <span className="h-px w-36 bg-[#c7df8a]/35" />
          </div>

          <div className="mx-auto mb-6 h-3 w-3 rotate-45 bg-[#c7df8a]" />

          <h2 className="font-serif text-6xl leading-tight text-white drop-shadow-md md:text-7xl">
            Trusted By Businesses
            <br />
            Across Singapore
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/90">
            Every business we support represents another successful halal
            certification journey built on trust, professionalism and
            personalised guidance.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[28px] border border-[#c7df8a]/40 bg-white/[0.04] px-10 py-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
            >
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#c7df8a]/35 bg-white/5 text-5xl text-[#c7df8a]">
                {stat.icon}
              </div>

              <h3 className="mt-10 font-serif text-7xl leading-none text-white drop-shadow-md">
                <Counter
                  end={stat.end}
                  suffix={stat.suffix}
                  startCounting={startCounting}
                />
              </h3>

              <div className="mx-auto mt-8 flex max-w-[220px] items-center justify-center gap-4">
                <span className="h-px flex-1 bg-[#c7df8a]/30" />
                <span className="h-3 w-3 rotate-45 bg-[#c7df8a]" />
                <span className="h-px flex-1 bg-[#c7df8a]/30" />
              </div>

              <p className="mt-7 text-xl text-white/90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}