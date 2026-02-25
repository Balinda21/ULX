const challenges = [
  {
    category: "A. Product Expansion Needs",
    color: "border-[#C9970C]",
    accent: "bg-[#C9970C]",
    items: [
      "Development of advanced system modules",
      "Enhancement of existing platforms",
      "Increased automation capabilities",
      "Expanded service offerings",
    ],
  },
  {
    category: "B. Financial Constraints",
    color: "border-[#002148]",
    accent: "bg-[#002148]",
    items: [
      "Need for additional working capital",
      "Operational expenses pressure",
      "Investment required for growth",
    ],
  },
  {
    category: "C. Infrastructure Scaling",
    color: "border-[#C9970C]",
    accent: "bg-[#C9970C]",
    items: [
      "Server capacity expansion",
      "Security upgrades",
      "Performance optimization",
      "Support for increasing user base",
    ],
  },
];

const financials = [
  { label: "Revenue-generating activities", sub: "With strong growth potential" },
  { label: "Operational costs require sustained funding", sub: "Ongoing platform maintenance and team" },
  { label: "Capital needed to accelerate expansion", sub: "For national and regional scaling" },
  { label: "Opportunities for strategic investment", sub: "Institutional and development partnerships" },
];

export default function Challenges() {
  return (
    <section className="py-28 2xl:py-36 bg-[#002148] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-10 bg-[#C9970C]" />
            <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
              Transparency
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.08]">
              Current Challenges &amp;{" "}
              <span className="text-[#C9970C]">Financial Situation</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed">
              ULX operates with full transparency. Here is an honest view of
              the challenges we are actively working to address — and where
              partners can make the greatest difference.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">

          {/* LEFT — Three challenge cards */}
          <div className="grid sm:grid-cols-3 gap-px bg-white/10">
            {challenges.map((c, i) => (
              <div key={i} className={`bg-[#001530] border-t-4 ${c.color} p-7`}>
                <div className={`${c.accent} text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 inline-block mb-6`}>
                  {c.category}
                </div>
                <ul className="space-y-3">
                  {c.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9970C] flex-shrink-0 mt-1.5" />
                      <span className="text-white/70 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT — Financial situation */}
          <div className="bg-[#C9970C] p-8 flex flex-col justify-between">
            <div>
              <div className="w-8 h-[2px] bg-white/30 mb-6" />
              <h3 className="text-white font-black text-xl mb-2">
                Financial Situation
              </h3>
              <p className="text-white/60 text-xs mb-8 leading-relaxed">
                ULX currently has:
              </p>
              <div className="space-y-5">
                {financials.map((f, i) => (
                  <div key={i} className="border-b border-white/15 pb-5 last:border-0 last:pb-0">
                    <div className="text-white font-bold text-sm mb-1">
                      {f.label}
                    </div>
                    <div className="text-white/50 text-xs leading-relaxed">
                      {f.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-white/70 text-xs leading-relaxed italic">
                With adequate support and investment, ULX has strong potential
                for national and regional expansion.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
