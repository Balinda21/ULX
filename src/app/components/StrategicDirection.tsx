const needs = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Investment or Structured Financing",
    desc: "Capital to accelerate platform growth and operational sustainability",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Technology Infrastructure Upgrades",
    desc: "Server capacity, security upgrades, and performance optimization",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Product Development Funding",
    desc: "Advanced modules, enhanced features, and increased automation",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Market Expansion",
    desc: "Growth beyond Southern Province into national and regional markets",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Strategic Partnerships",
    desc: "Government and development institutions for expanded sustainable funding",
  },
];

const directions = [
  {
    num: "01",
    title: "Become a leading technology solutions provider in Rwanda and the region",
  },
  {
    num: "02",
    title: "Deliver innovative, scalable digital systems across multiple sectors",
  },
  {
    num: "03",
    title: "Expand into regional markets beyond Rwanda",
  },
  {
    num: "04",
    title: "Build long-term sustainable revenue streams",
  },
  {
    num: "05",
    title: "Establish strong institutional partnerships with government and development bodies",
  },
];

export default function StrategicDirection() {
  return (
    <section className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-[#C9970C]" />
            <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
              Growth & Vision
            </span>
            <span className="h-px w-10 bg-[#C9970C]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#002148] leading-[1.08] mb-4">
            Immediate Needs &{" "}
            <span className="text-[#C9970C]">Strategic Direction</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            To reach the next growth phase, ULX requires targeted investment
            and support — and is positioned to achieve significant impact with
            the right partners.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12">

          {/* LEFT — Immediate Needs */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="bg-[#C9970C] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                Immediate Needs
              </div>
            </div>
            <div className="grid gap-3">
              {needs.map((n, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#f8f9fb] p-5 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-10 h-10 bg-[#002148] flex items-center justify-center flex-shrink-0 text-white">
                    {n.icon}
                  </div>
                  <div>
                    <div className="font-black text-[#002148] text-sm mb-1">
                      {n.title}
                    </div>
                    <div className="text-gray-400 text-xs leading-relaxed">
                      {n.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Strategic Direction */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="bg-[#002148] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                Strategic Direction
              </div>
            </div>

            <div className="bg-[#002148] p-8">
              <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-8">
                ULX aims to:
              </p>
              <div className="divide-y divide-white/10">
                {directions.map((d, i) => (
                  <div key={i} className="flex items-start gap-5 py-5">
                    <span className="text-[#C9970C] font-black text-base leading-none flex-shrink-0 pt-0.5">
                      {d.num}
                    </span>
                    <span className="text-white/80 text-sm leading-relaxed">
                      {d.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 bg-[#C9970C] p-6 flex items-center justify-between gap-4">
              <p className="text-white font-bold text-sm leading-relaxed">
                Ready to partner with ULX on this mission?
              </p>
              <a
                href="#contact"
                className="flex-shrink-0 bg-white text-[#C9970C] font-black text-xs px-5 py-3 uppercase tracking-widest hover:bg-[#002148] hover:text-white transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
