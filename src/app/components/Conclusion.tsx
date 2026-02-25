const facts = [
  { label: "Functional office and infrastructure" },
  { label: "Skilled professional team" },
  { label: "Active service delivery" },
  { label: "Scalable technology capabilities" },
];

const priorities = [
  "Financial strengthening",
  "Product enhancement",
  "Infrastructure scaling",
  "Market growth",
];

export default function Conclusion() {
  return (
    <section className="py-28 2xl:py-36 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-10 bg-[#C9970C]" />
          <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
            Conclusion
          </span>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-8">
              Fully Operational.
              <br />
              <span className="text-[#C9970C]">Ready to Scale.</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              ULX is a fully operational technology company with proven
              capabilities, active service delivery, and a clear path to national
              and regional expansion. The platform is live, the impact is
              measurable, and the team is ready.
            </p>

            {/* What ULX has */}
            <div className="mb-10">
              <div className="text-[#002148] font-black text-sm uppercase tracking-widest mb-5">
                What ULX has today:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {facts.map((f, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 shadow-sm flex items-center hover:shadow-md transition-shadow duration-200"
                  >
                    <span className="text-[#002148] font-bold text-xs leading-snug">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#C9970C] text-white font-bold text-sm px-8 py-4 hover:bg-[#002148] transition-colors duration-300 shadow-lg"
              >
                Partner With Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border border-[#002148] text-[#002148] font-bold text-sm px-8 py-4 hover:bg-[#002148] hover:text-white transition-colors duration-300"
              >
                Invest in ULX
              </a>
            </div>
          </div>

          {/* RIGHT — Priorities + statement */}
          <div className="flex flex-col gap-6">

            {/* Current priorities */}
            <div className="bg-[#002148] p-8">
              <div className="w-8 h-[2px] bg-[#C9970C] mb-6" />
              <h3 className="text-white font-black text-base mb-6">
                Current Priorities
              </h3>
              <div className="space-y-0 divide-y divide-white/10">
                {priorities.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 py-4">
                    <span className="text-[#C9970C] font-black text-sm min-w-[28px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white/80 text-sm font-medium">
                      {p}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bold closing statement */}
            <div className="bg-[#C9970C] p-8">
              <div className="w-8 h-[2px] bg-white/30 mb-6" />
              <p className="text-white font-black text-lg leading-snug mb-4">
                With adequate support and investment, ULX has strong potential
                for national and regional expansion.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                The mission is clear. The technology is built. The impact is
                proven. All that remains is the partnership to take it further.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
