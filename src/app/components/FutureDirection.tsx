const directions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    number: "01",
    title: "National Expansion",
    desc: "Expand beyond the Southern Province to all provinces across Rwanda, bringing the Berulo App to every school and community nationwide.",
    accent: "bg-[#002148]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    number: "02",
    title: "Social Services Integration",
    desc: "Strengthen integration with child welfare and anti-stunting programs, creating a holistic support ecosystem for Rwanda's most vulnerable.",
    accent: "bg-[#C9970C]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    number: "03",
    title: "Predictive Analytics",
    desc: "Enhance predictive analytics within the Berulo App, enabling proactive identification of at-risk students before problems escalate.",
    accent: "bg-[#002148]",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    number: "04",
    title: "Sustainable Partnerships",
    desc: "Scale partnerships with government and development institutions to ensure expanded, sustainable funding and long-term operational growth.",
    accent: "bg-[#C9970C]",
  },
];

const goals = [
  "Innovative digital systems",
  "Regional market expansion",
  "Sustainable revenue streams",
  "Institutional partnerships",
];

export default function FutureDirection() {
  return (
    <section className="py-28 2xl:py-36 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                Where We&apos;re Headed
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08]">
              Future
              <br />
              <span className="text-[#C9970C]">Direction</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-relaxed lg:pb-2">
            ULX aims to become a leading technology solutions provider in Rwanda
            and the region — delivering innovative, scalable digital systems
            that create long-term sustainable impact.
          </p>
        </div>

        {/* Four direction cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {directions.map((d, i) => (
            <div
              key={i}
              className="bg-white shadow-[0_8px_40px_rgba(0,33,72,0.13)] hover:shadow-[0_20px_60px_rgba(0,33,72,0.20)] hover:-translate-y-2 transition-all duration-300 p-7 flex flex-col"
            >
              {/* Top row: icon + number */}
              <div className="flex items-start justify-between mb-6">
                <div className={`${d.accent} w-11 h-11 flex items-center justify-center text-white flex-shrink-0`}>
                  {d.icon}
                </div>
                <span className="text-gray-100 font-black text-4xl leading-none select-none">
                  {d.number}
                </span>
              </div>

              {/* Text */}
              <h3 className="font-black text-[#002148] text-base leading-snug mb-3">
                {d.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom — strategic block */}
        <div className="bg-[#002148] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="w-8 h-[2px] bg-[#C9970C] mb-5" />
            <h3 className="text-white font-black text-xl md:text-2xl leading-snug mb-3">
              Leading Rwanda&apos;s Digital Transformation
            </h3>
            <p className="text-white/55 text-sm leading-relaxed">
              With adequate support and investment, ULX has strong potential for
              national and regional expansion.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-shrink-0">
            {goals.map((g, i) => (
              <div key={i} className="border border-white/15 px-4 py-3 text-white/70 text-xs font-semibold leading-snug">
                {g}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
