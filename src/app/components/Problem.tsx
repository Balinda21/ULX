import Image from "next/image";

const realities = [
  "Repeated absenteeism goes undetected for weeks or months",
  "Poverty-related absences are flagged far too late",
  "School–local authority coordination remains weak",
  "Dropout is identified only after it becomes permanent",
];

export default function Problem() {
  return (
    <section className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 2xl:gap-32 items-start">

          {/* ══════════════════════════════════════
              LEFT — Image composition
          ══════════════════════════════════════ */}
          <div className="relative sm:pb-16">

            {/* Crimson backdrop block — behind main image */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#C9970C]" />

            {/* Main image */}
            <div className="relative h-[540px] overflow-hidden shadow-2xl">
              <Image
                src="/images/6.jpeg"
                alt="Children in classroom — early warning signs go undetected"
                fill
                className="object-cover"
              />
              {/* Bottom gradient with stat */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002148]/85 to-transparent px-8 py-6">
                <div className="text-white text-5xl font-black leading-none">
                  79.2%
                </div>
                <div className="text-white/60 text-sm font-medium mt-1">
                  agree poor attendance leads to dropout
                </div>
              </div>
            </div>

            {/* Second image — overlapping bottom-right */}
            <div className="hidden sm:block absolute bottom-0 right-0 w-52 h-60 shadow-2xl overflow-hidden ring-4 ring-white">
              <Image
                src="/images/9.jpeg"
                alt="Vulnerable child missing school"
                fill
                className="object-cover"
              />
            </div>

            {/* Alert badge — navy, sharp */}
            <div className="absolute top-0 left-0 bg-[#002148] text-white px-6 py-4 shadow-xl z-10">
              <div className="text-2xl font-black leading-none">31%+</div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mt-1">
                Out of School
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT — Content
          ══════════════════════════════════════ */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                The Challenge
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-8">
              Problem
              <br />
              <span className="text-[#C9970C]">Statement</span>
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              Despite improved access to education, early warning signs of
              school dropout remain largely undetected — leaving vulnerable
              children behind without intervention.
            </p>

            {/* ── What the data shows + Yet in Reality — sharp, side by side ── */}
            <div className="grid grid-cols-2 gap-0 shadow-lg">

              {/* Navy — What the Data Shows */}
              <div className="bg-[#002148] p-7 flex flex-col">
                <div className="w-8 h-[3px] bg-white/30 mb-5" />
                <h3 className="text-white font-black text-base mb-5">
                  What the Data Shows
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <div className="text-[#C9970C] font-black text-2xl leading-none mb-1">79.2%</div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      of respondents in Rwanda agree that poor attendance leads to school dropout
                    </p>
                  </div>
                  <div>
                    <div className="text-white font-black text-2xl leading-none mb-1">31%+</div>
                    <p className="text-white/60 text-xs leading-relaxed">
                      out-of-school rates in some regions across Sub-Saharan Africa
                    </p>
                  </div>
                </div>
              </div>

              {/* Crimson — Yet in Reality */}
              <div className="bg-[#C9970C] p-7 flex flex-col">
                <div className="w-8 h-[3px] bg-white/30 mb-5" />
                <h3 className="text-white font-black text-base mb-5">
                  Yet in Reality
                </h3>
                <div className="divide-y divide-white/15">
                  {realities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                      <span className="text-white/40 font-black text-xs leading-none pt-0.5 min-w-[20px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/80 text-xs leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
