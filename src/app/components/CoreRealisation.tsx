const realisations = [
  {
    trigger: "Dropout is not merely an education issue",
    insight: "It is a coordination failure between schools, families, community structures, and government systems",
    color: "border-[#C9970C]",
    num: "01",
  },
  {
    trigger: "The solution required more than compassion",
    insight: "It required infrastructure — real-time, connected, and scalable",
    color: "border-[#002148]",
    num: "02",
  },
  {
    trigger: "Many children would never leave school permanently",
    insight: "If someone had tracked vulnerability in real time and intervened early before hardship pushed them out",
    color: "border-[#C9970C]",
    num: "03",
  },
];

export default function CoreRealisation() {
  return (
    <section className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                The Core Realisation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08]">
              A Simple But
              <br />
              <span className="text-[#C9970C]">Powerful</span> Truth
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              The founding conviction of ULX emerged from a simple but powerful
              realization — one that reframed the entire problem and pointed
              toward a solution that no single actor could provide alone.
            </p>
          </div>
        </div>

        {/* Three realisation cards */}
        <div className="grid md:grid-cols-3 gap-0">
          {realisations.map((r, i) => (
            <div
              key={i}
              className={`relative border-t-4 ${r.color} bg-[#f8f9fb] p-8 ${
                i === 1 ? "bg-[#002148]" : ""
              }`}
            >
              {/* Number */}
              <div
                className={`text-[3.5rem] md:text-[5rem] font-black leading-none mb-6 select-none ${
                  i === 1 ? "text-white/25" : "text-gray-200"
                }`}
              >
                {r.num}
              </div>

              {/* Trigger */}
              <p
                className={`font-black text-base mb-4 leading-snug ${
                  i === 1 ? "text-white" : "text-[#002148]"
                }`}
              >
                {r.trigger}
              </p>

              {/* Divider */}
              <div
                className={`w-8 h-[2px] mb-4 ${
                  i === 1 ? "bg-[#C9970C]" : "bg-[#C9970C]"
                }`}
              />

              {/* Insight */}
              <p
                className={`text-sm leading-relaxed ${
                  i === 1 ? "text-white/65" : "text-gray-500"
                }`}
              >
                {r.insight}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-0 bg-[#C9970C] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-white font-black text-xl md:text-2xl leading-snug max-w-2xl">
            &ldquo;If someone had ensured that hardship did not push a child out
            of structured opportunity — they would have stayed.&rdquo;
          </p>
          <div className="flex-shrink-0">
            <div className="text-white/60 text-xs uppercase tracking-widest font-bold">
              ~ Cyusa Berulo
            </div>
            <div className="text-white/40 text-xs mt-1">Founder, ULX Ltd</div>
          </div>
        </div>

      </div>
    </section>
  );
}
