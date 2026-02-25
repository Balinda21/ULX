"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    number: 50000,
    suffix: "K+",
    display: (n: number) => (n >= 1000 ? Math.floor(n / 1000) + "K+" : String(n)),
    label: "Dropout Cases Flagged",
    desc: "Early detection through real-time monitoring",
  },
  {
    number: 8500,
    suffix: "+",
    display: (n: number) => n.toLocaleString() + "+",
    label: "Children Reintegrated",
    desc: "Back into school after previously dropping out",
  },
  {
    number: 1173,
    suffix: "+",
    display: (n: number) => n.toLocaleString() + "+",
    label: "Schools Connected",
    desc: "Nursery to secondary and TVET",
  },
  {
    number: 1000000,
    suffix: "M+",
    display: (n: number) => (n >= 1000000 ? "1M+" : Math.floor(n / 1000) + "K+"),
    label: "Learners Reached",
    desc: "Actively monitored on the platform",
  },
];

const pillars = [
  {
    title: "Early Detection at Scale",
    body: "Flagged and surfaced over 50,000 school dropout cases through its monitoring system — enabling authorities to intervene before dropout becomes permanent.",
    image: "/images/4.jpeg",
    bg: "bg-[#002148]",
  },
  {
    title: "School Re-integration",
    body: "Reintegrated 8,500 children back into school who had previously dropped out — restoring futures that would otherwise have been lost.",
    image: "/images/6.jpeg",
    bg: "bg-[#C9970C]",
  },
  {
    title: "Strategic Partnerships",
    body: "Supported thousands of vulnerable learners with school fees, feeding programs, clothing, essential materials, and household resilience support.",
    image: "/images/5.jpeg",
    bg: "bg-[#002148]",
  },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (1800 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, active]);
  return count;
}

function StatRow({ metric, active, last }: { metric: typeof metrics[0]; active: boolean; last: boolean }) {
  const count = useCountUp(metric.number, active);
  return (
    <div className={`flex items-center gap-6 py-7 ${!last ? "border-b border-gray-100" : ""}`}>
      <div className="min-w-[100px] sm:min-w-[120px]">
        <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002148] leading-none">
          {metric.display(count)}
        </div>
      </div>
      <div className="flex-1 border-l border-gray-200 pl-6">
        <div className="font-black text-[#002148] text-sm mb-0.5">{metric.label}</div>
        <div className="text-gray-400 text-xs leading-relaxed">{metric.desc}</div>
      </div>
    </div>
  );
}

export default function Impact() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20" ref={ref}>

        {/* ══════════════════════════════════════
            TOP — Image left / Stats right
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 xl:gap-24 2xl:gap-32 items-start mb-12 lg:mb-20">

          {/* LEFT — Image */}
          <div className="relative sm:pb-16">

            {/* Crimson backdrop */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#C9970C]" />

            {/* Main image */}
            <div className="relative h-[540px] overflow-hidden shadow-2xl">
              <Image
                src="/images/9.jpeg"
                alt="Impact — Southern Province Rwanda"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002148]/80 to-transparent" />

              {/* Location badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-400 flex-shrink-0" />
                  <span className="text-green-300 text-xs font-bold uppercase tracking-widest">Active</span>
                </div>
                <div className="text-white font-black text-lg leading-snug">
                  Southern Province, Rwanda
                </div>
                <div className="text-white/50 text-xs mt-1">
                  Deployed across all school types
                </div>
              </div>
            </div>

            {/* Small overlapping image */}
            <div className="hidden sm:block absolute bottom-0 right-0 w-52 h-56 shadow-2xl overflow-hidden ring-4 ring-white">
              <Image
                src="/images/8.jpeg"
                alt="Students benefiting from the platform"
                fill
                className="object-cover"
              />
            </div>

            {/* Badge top-left */}
            <div className="absolute top-0 left-0 bg-[#002148] text-white px-6 py-4 shadow-xl z-10">
              <div className="text-2xl font-black leading-none">2014</div>
              <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-1">
                Since
              </div>
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div className="flex flex-col justify-center">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                Results That Matter
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-4">
              Impact
              <br />
              <span className="text-[#C9970C]">to Date</span>
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Operating exclusively in Rwanda&apos;s Southern Province, the Berulo
              App has already transformed thousands of lives — with measurable,
              verified results.
            </p>

            {/* Stat rows */}
            <div>
              {metrics.map((m, i) => (
                <StatRow key={i} metric={m} active={active} last={i === metrics.length - 1} />
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM — Three impact pillars
        ══════════════════════════════════════ */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-[0_8px_40px_rgba(0,33,72,0.13)] hover:shadow-[0_20px_60px_rgba(0,33,72,0.20)] hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col"
            >
              <div className={`w-8 h-[3px] ${i === 1 ? "bg-[#C9970C]" : "bg-[#002148]"} mb-6`} />
              <h3 className="text-[#002148] font-black text-lg leading-snug mb-4">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
