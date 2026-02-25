import Image from "next/image";

const capabilities = [
  {
    title: "Cloud Infrastructure",
    desc: "Secure and scalable cloud-based system operations",
    accent: "bg-[#002148]",
    border: "border-[#002148]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Secure Database Architecture",
    desc: "Large-scale institutional and community data management",
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile Applications",
    desc: "Apps for administrators, staff, and beneficiaries",
    accent: "bg-[#002148]",
    border: "border-[#002148]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Biometric Face Recognition",
    desc: "Smart attendance tracking with biometric verification",
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "UWI Digital Monitoring",
    desc: "Umugoroba w'Imiryango monitoring and reporting system",
    accent: "bg-[#002148]",
    border: "border-[#002148]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "ECD Monitoring & Tracking",
    desc: "Early Childhood Development and child-support tracking tools",
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Real-time Dashboards",
    desc: "Live monitoring dashboards and automated reporting systems",
    accent: "bg-[#002148]",
    border: "border-[#002148]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "API-driven Integrations",
    desc: "Interoperability with partner platforms via API design",
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Cybersecurity Protocols",
    desc: "User authentication and role-based access controls",
    accent: "bg-[#002148]",
    border: "border-[#002148]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Data Analytics & Impact",
    desc: "Evidence-based decision-making through data measurement",
    accent: "bg-[#C9970C]",
    border: "border-[#C9970C]",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const ministries = [
  "Ministry of Education",
  "Ministry of Gender & Family Promotion",
  "Ministry of Local Government",
];

export default function TechCapabilities() {
  return (
    <section className="py-28 2xl:py-36 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* ══════════════════════════════════════
            TOP — Two-col intro
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 2xl:gap-32 items-start mb-20">

          {/* LEFT — Text */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                What We Build
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-7">
              Technical
              <br />
              <span className="text-[#C9970C]">Capabilities</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              The company delivers an integrated digital management platform
              aligned with national development priorities and recognized by key
              government institutions across Rwanda.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              The platform is designed to support education systems while
              extending to broader institutional, community, and social
              development programs.
            </p>

            {/* Ministry recognition list */}
            <div className="mb-2">
              <div className="text-[#002148] font-black text-xs uppercase tracking-widest mb-4">
                Recognized by:
              </div>
              <div className="grid gap-2">
                {ministries.map((m, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#f8f9fb] px-4 py-3 border-l-4 border-[#002148]">
                    <div className="w-6 h-6 bg-[#C9970C] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#002148] font-bold text-sm">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Image composition */}
          <div className="relative sm:pb-14">

            {/* Navy backdrop */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#002148]" />

            {/* Main image */}
            <div className="relative h-[460px] overflow-hidden shadow-2xl">
              <Image
                src="/images/2.jpeg"
                alt="Team using the Berulo platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002148]/70 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#C9970C] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Integrated Platform
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="text-white font-black text-4xl leading-none">10+</div>
                <div className="text-white/60 text-sm mt-1">Core technology capabilities</div>
              </div>
            </div>

            {/* Small overlapping image */}
            <div className="hidden sm:block absolute bottom-0 right-0 w-52 h-44 shadow-2xl overflow-hidden ring-4 ring-white">
              <Image
                src="/images/7.jpeg"
                alt="Platform dashboard view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM — Capability cards grid
        ══════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white shadow-[0_8px_40px_rgba(0,33,72,0.13)] hover:shadow-[0_20px_60px_rgba(0,33,72,0.22)] hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col aspect-square justify-between"
            >
              {/* Icon */}
              <div className={`${cap.accent} w-9 h-9 flex items-center justify-center text-white flex-shrink-0`}>
                {cap.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-black text-[#002148] text-sm leading-snug mb-1.5">
                  {cap.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
