import Image from "next/image";

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    text: "Schools do not operate in isolation",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    text: "Local leaders receive real-time signals",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    text: "Families are supported before crises escalate",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    text: "Poverty does not silently remove a child from education",
  },
];

export default function Model() {
  return (
    <section className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[2px] w-10 bg-[#C9970C]" />
          <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
            Our Approach
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 2xl:gap-32 items-center">

          {/* LEFT — Core message */}
          <div>
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-8">
              ULX&apos;s Model
              <br />
              <span className="text-[#C9970C]">Closes the Gap</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
              ULX&apos;s model is based on the understanding that children suffer
              most where institutions fail to connect across the value chain.
              The Berulo App exists to close that gap by ensuring:
            </p>

            {/* Pillars */}
            <div className="grid gap-4">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 bg-[#f8f9fb] border-l-4 border-[#002148] p-5 hover:shadow-md transition-shadow duration-300"
                  style={{ borderColor: i % 2 === 1 ? "#C9970C" : "#002148" }}
                >
                  <div className="w-10 h-10 bg-[#C9970C] flex items-center justify-center flex-shrink-0 text-white">
                    {p.icon}
                  </div>
                  <span className="text-gray-700 text-sm leading-relaxed font-medium flex-1 min-w-0">
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Two cascading images */}
          <div className="relative pt-4">

            {/* Navy accent block behind images */}
            <div className="absolute top-0 right-0 bottom-8 left-8 bg-[#002148]/8" />

            {/* Image 1 — main, tall */}
            <div className="relative h-[340px] overflow-hidden shadow-2xl">
              <Image
                src="/images/6.jpeg"
                alt="ULX model — connecting institutions"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#002148] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Our Model
              </div>
            </div>

            {/* Image 2 — offset, overlapping */}
            <div className="relative h-[260px] mt-3 sm:mr-8 overflow-hidden shadow-2xl">
              <Image
                src="/images/9.jpeg"
                alt="ULX closing the gap for children"
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#C9970C] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Closing the Gap
              </div>
            </div>

            {/* Quote bar */}
            <div className="bg-[#002148] p-6 mt-3">
              <div className="w-8 h-[2px] bg-[#C9970C] mb-3" />
              <p className="text-white font-black text-sm leading-snug">
                The solution required more than compassion —
                <span className="text-[#ff4b7a] font-extrabold">
                  {" "}
                  it required infrastructure.
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
