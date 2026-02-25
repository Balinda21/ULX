import Image from "next/image";

const modules = [
  {
    name: "Berulo Education",
    desc: "Digital education management & monitoring system",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l3.5-2" />
      </svg>
    ),
    color: "bg-[#002148]",
  },
  {
    name: "Berulo UWI",
    desc: "Community monitoring & reporting solution",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-[#C9970C]",
  },
  {
    name: "Berulo ECD",
    desc: "Early childhood development tracking",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "bg-[#002148]",
  },
];

const capabilities = [
  "Solve operational and management challenges using technology",
  "Develop scalable digital platforms and services",
  "Enable data-driven decision-making at every level",
  "Enhance productivity and institutional accountability",
  "Provide sustainable technology solutions for public and private sectors",
];

export default function Background() {
  return (
    <section className="py-28 2xl:py-36 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 xl:gap-24 2xl:gap-32 items-start">

          {/* ══════════════════════════════════════
              LEFT — Text content
          ══════════════════════════════════════ */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                Background
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-7">
              The Berulo App
              <br />
              <span className="text-[#C9970C]">Platform</span>
            </h2>

            {/* Intro paragraph */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              To date, ULX operates the Berulo App as its core digital
              operational tool — an integrated platform made up of three
              operational components, each designed to meet specific monitoring
              and management needs while working within a single unified system.
            </p>

            {/* ── Three Module Cards ── */}
            <div className="grid gap-3 mb-10">
              {modules.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white shadow-sm p-4 border-l-4 group hover:shadow-md transition-shadow duration-200"
                  style={{ borderColor: i === 1 ? "#C9970C" : "#002148" }}
                >
                  <div
                    className={`${m.color} w-10 h-10 flex-shrink-0 flex items-center justify-center text-white`}
                  >
                    {m.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-black text-[#002148] text-sm mb-0.5">
                      {m.name}
                    </div>
                    <div className="text-gray-400 text-xs leading-relaxed">
                      {m.desc}
                    </div>
                  </div>
                  <svg
                    className="w-4 h-4 flex-shrink-0 text-gray-300 group-hover:text-[#C9970C] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Together paragraph */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8 border-l-2 border-[#C9970C] pl-4 italic">
              Together, these components enable the platform to support
              education management, community engagement, and early childhood
              development monitoring through one centralized digital solution.
            </p>

            {/* ── Capabilities — numbered ── */}
            <div className="divide-y divide-gray-100">
              {capabilities.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                >
                  <span className="text-[#C9970C] font-black text-sm leading-none pt-0.5 min-w-[28px] flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-600 text-sm leading-relaxed min-w-0 flex-1">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT — Two big cascading images
          ══════════════════════════════════════ */}
          <div className="relative pt-4">

            {/* Crimson accent block — sits behind images */}
            <div className="absolute top-0 right-0 bottom-8 left-8 bg-[#C9970C]/8" />

            {/* ── Image 1 — main, full width, tall ── */}
            <div className="relative h-[360px] overflow-hidden shadow-2xl">
              <Image
                src="/images/4.jpeg"
                alt="Teacher using Berulo App with students in classroom"
                fill
                className="object-cover object-top"
              />
              {/* Subtle bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Floating label on image */}
              <div className="absolute top-4 left-4 bg-[#002148] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Berulo Education
              </div>
            </div>

            {/* ── Image 2 — offset left, overlapping ── */}
            <div className="relative h-[300px] mt-3 sm:mr-8 overflow-hidden shadow-2xl">
              <Image
                src="/images/5.jpeg"
                alt="ULX team demonstrating platform in the field"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Floating label */}
              <div className="absolute top-4 left-4 bg-[#C9970C] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Field Operations
              </div>
            </div>

            {/* ── Stat block below images ── */}
            <div className="grid grid-cols-3 mt-3">
              <div className="bg-[#002148] text-white px-4 py-5 text-center">
                <div className="text-3xl font-black leading-none">3</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider mt-1 font-semibold">
                  Core Modules
                </div>
              </div>
              <div className="bg-[#C9970C] text-white px-4 py-5 text-center">
                <div className="text-3xl font-black leading-none">1</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider mt-1 font-semibold">
                  Unified Platform
                </div>
              </div>
              <div className="bg-white text-[#002148] px-4 py-5 text-center shadow-lg">
                <div className="text-3xl font-black leading-none">∞</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1 font-semibold">
                  Scalable Impact
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
