import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 2xl:gap-32 items-start">

          {/* ══════════════════════════════════════
              LEFT — Image composition
          ══════════════════════════════════════ */}
          <div className="relative sm:pb-16">

            {/* Navy backdrop block — behind main image */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#002148]" />

            {/* Main image */}
            <div className="relative h-[540px] overflow-hidden shadow-2xl">
              <Image
                src="/images/1.jpeg"
                alt="ULX team member using the Berulo App"
                fill
                className="object-cover"
              />
              {/* Bottom gradient with a stat */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002148]/80 to-transparent px-8 py-6">
                <div className="flex items-end gap-4">
                  <div>
                    <div className="text-white text-5xl font-black leading-none">
                      10+
                    </div>
                    <div className="text-white/60 text-sm font-medium mt-1">
                      Years of community impact
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second image — overlapping bottom-right */}
            <div className="hidden sm:block absolute bottom-0 right-0 w-52 h-60 shadow-2xl overflow-hidden ring-4 ring-white">
              <Image
                src="/images/3.jpeg"
                alt="Students using technology together"
                fill
                className="object-cover"
              />
            </div>

            {/* Founded badge — crimson, sharp */}
            <div className="absolute top-0 left-0 bg-[#C9970C] text-white px-6 py-4 shadow-xl z-10">
              <div className="text-2xl font-black leading-none">2014</div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mt-1">
                Founded
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
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-8">
              A Digital Company
              <br />
              <span className="text-[#C9970C]">Built</span> on Purpose
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
              ULX is an Unlimited Digital Solution company delivering integrated
              and future-focused solutions across education, corporate
              management, technology, sustainable development, and community
              transformation.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              At its core, ULX operates the{" "}
              <span className="font-semibold text-[#002148]">Berulo App</span>{" "}
              — an integrated platform with three operational modules designed
              to meet specific monitoring and management needs within a single
              unified system, supporting education, community engagement, and
              early childhood development.
            </p>

            {/* ── Mission + Vision — sharp, side by side ── */}
            <div className="grid grid-cols-2 gap-0 mb-10 shadow-lg">
              <div className="bg-[#002148] p-7">
                <div className="w-8 h-[3px] bg-white/30 mb-5" />
                <h3 className="text-white font-black text-base mb-3">
                  Our Mission
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  To deliver reliable technology services while supporting
                  community development.
                </p>
              </div>
              <div className="bg-[#C9970C] p-7">
                <div className="w-8 h-[3px] bg-white/30 mb-5" />
                <h3 className="text-white font-black text-base mb-3">
                  Our Vision
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  To create positive change through innovative digital
                  solutions.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#002148] text-white font-bold text-sm px-8 py-4 hover:bg-[#C9970C] transition-colors duration-300 shadow-lg"
              >
                Work With Us
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
