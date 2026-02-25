import Image from "next/image";

const chains = [
  {
    signal: "Absence",
    leads: "Dropout",
    outcome: "Permanent exclusion from learning",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
  },
  {
    signal: "Absence",
    leads: "Learning Loss",
    outcome: "Gaps that compound year over year",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "bg-[#002148]",
    border: "border-[#002148]",
  },
  {
    signal: "Absence",
    leads: "Social Exclusion",
    outcome: "Intergenerational poverty cycles",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
  },
];

export default function WhyAttendance() {
  return (
    <section className="py-28 2xl:py-36 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 xl:gap-24 2xl:gap-32 items-center">

          {/* LEFT — image */}
          <div className="relative">
            <div className="absolute top-0 left-0 bottom-8 right-8 bg-[#002148]/8" />
            <div className="relative h-[480px] overflow-hidden shadow-2xl">
              <Image
                src="/images/8.jpeg"
                alt="Students in classroom — attendance matters"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002148]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white p-5 shadow-xl">
                  <div className="text-[#C9970C] font-black text-3xl leading-none mb-1">
                    Earliest
                  </div>
                  <div className="text-[#002148] font-bold text-sm uppercase tracking-widest">
                    Signal of Risk
                  </div>
                  <div className="text-gray-400 text-xs mt-2 leading-relaxed">
                    Attendance action prevents dropout before it happens
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                Why Focus on Attendance?
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-8">
              Attendance Is
              <br />
              <span className="text-[#C9970C]">Everything</span>
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Attendance is the earliest signal of risk. Every absence that goes
              unaddressed sets off a chain reaction — one that compounds silently
              until intervention becomes too late.
            </p>

            {/* Chain cards */}
            <div className="grid gap-4">
              {chains.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-0 border-l-4 ${c.border} bg-white shadow-sm overflow-hidden`}
                >
                  {/* Icon block */}
                  <div className={`${c.accent} w-14 h-14 flex items-center justify-center flex-shrink-0 text-white`}>
                    {c.icon}
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-0 flex-1 px-5 py-4">
                    <div className="flex-1">
                      <div className="font-black text-[#002148] text-xs uppercase tracking-widest mb-0.5">
                        {c.signal} appears before
                      </div>
                      <div className="font-black text-[#002148] text-base">
                        {c.leads}
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs max-w-[160px] text-right leading-relaxed">
                      {c.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom callout */}
            <div className="mt-8 border-l-2 border-[#C9970C] pl-5">
              <p className="text-gray-500 text-sm leading-relaxed italic">
                Attendance action prevents dropout — it is the single most
                actionable lever for keeping children in school and in their
                futures.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
