import Image from "next/image";

const capabilities = [
  {
    title: "Instant alerts to village, cell & district",
    desc: "Real-time escalation the moment a child is flagged at risk",
    border: "border-[#002148]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    iconBg: "bg-[#002148]",
  },
  {
    title: "Structured escalation for poverty-related absences",
    desc: "Coordinated response linking schools, families, and local government",
    border: "border-[#C9970C]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    iconBg: "bg-[#C9970C]",
  },
  {
    title: "Biometric verification for data integrity",
    desc: "Face-recognition attendance ensuring accurate, tamper-proof records",
    border: "border-[#002148]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: "bg-[#002148]",
  },
];

const modules = [
  {
    name: "Berulo Education",
    tagline: "Digital Education Management",
    desc: "A digital education management and monitoring system supporting schools through attendance tracking, administration monitoring, and real-time reporting for improved learning outcomes.",
    features: [
      "Real-time digital attendance tracking",
      "Dropout early warning alerts",
      "Administration monitoring dashboard",
      "Automated reporting system",
    ],
    image: "/images/4.jpeg",
    headerBg: "bg-[#002148]",
    iconBg: "bg-[#C9970C]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5 2M12 20l3.5-2" />
      </svg>
    ),
  },
  {
    name: "Berulo UWI",
    tagline: "Community Monitoring Solution",
    desc: "A community monitoring solution supporting Umugoroba w'Imiryango (UWI) through structured data collection, participation tracking, and reporting that strengthens community engagement and local governance.",
    features: [
      "Structured community data collection",
      "Participation & attendance tracking",
      "Local governance follow-up",
      "Community reporting tools",
    ],
    image: "/images/5.jpeg",
    headerBg: "bg-[#C9970C]",
    iconBg: "bg-[#002148]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Berulo ECD",
    tagline: "Early Childhood Development",
    desc: "An Early Childhood Development monitoring system enabling tracking of child development, attendance, and support services to improve early learning and child welfare outcomes.",
    features: [
      "Child development milestone tracking",
      "ECD attendance monitoring",
      "Support service coordination",
      "Child welfare outcome reporting",
    ],
    image: "/images/3.jpeg",
    headerBg: "bg-[#002148]",
    iconBg: "bg-[#C9970C]",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-28 2xl:py-36 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">

        {/* ══════════════════════════════════════
            TOP — Two-col intro
        ══════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-24 2xl:gap-32 items-start mb-16">

          {/* LEFT — Text */}
          <div className="flex flex-col">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                Our Solution
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-7">
              Berulo App
              <br />
              <span className="text-[#C9970C]">Platform</span>
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Berulo App is a real-time digital attendance and early warning
              platform, recognized by the Ministry of Education and deployed
              across all school types in the Southern Province.
            </p>

            {/* Ministry recognition badge */}
            <div className="flex items-center gap-4 bg-[#002148] p-5 mb-8 shadow-lg">
              <div className="w-10 h-10 bg-[#C9970C] flex items-center justify-center flex-shrink-0 text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-black text-sm">
                  Recognized by the Ministry of Education
                </div>
                <div className="text-white/55 text-xs mt-0.5">
                  Deployed across all school types — Southern Province, Rwanda
                </div>
              </div>
            </div>

            {/* 3 Capability strips */}
            <div className="grid gap-3">
              {capabilities.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 bg-white shadow-sm p-4 border-l-4 ${c.border} hover:shadow-md transition-shadow duration-200`}
                >
                  <div className={`${c.iconBg} w-10 h-10 flex items-center justify-center flex-shrink-0 text-white`}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-black text-[#002148] text-sm">{c.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image + stat bar */}
          <div className="relative pt-4">

            {/* Accent block behind image */}
            <div className="absolute top-0 right-0 bottom-8 left-8 bg-[#002148]/8" />

            {/* Image */}
            <div className="relative h-[400px] overflow-hidden shadow-2xl">
              <Image
                src="/images/1.jpeg"
                alt="Berulo App in action — teacher with students"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002148]/70 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#C9970C] text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg">
                Live Platform
              </div>
              <div className="absolute bottom-6 left-6">
                <div className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">
                  Public, private, foundation,
                </div>
                <div className="text-white font-black text-sm">
                  Boarding & day schools — all covered
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-px mt-px bg-[#002148]">
              <div className="bg-white px-3 py-4 text-center">
                <div className="text-lg sm:text-2xl font-black text-[#002148] leading-none">1,173</div>
                <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 font-semibold">Schools</div>
              </div>
              <div className="bg-white px-3 py-4 text-center">
                <div className="text-lg sm:text-2xl font-black text-[#C9970C] leading-none">32,185</div>
                <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 font-semibold">Teachers</div>
              </div>
              <div className="bg-white px-3 py-4 text-center">
                <div className="text-lg sm:text-2xl font-black text-[#002148] leading-none">3,275</div>
                <div className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider mt-1 font-semibold">Field Workers</div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BOTTOM — Three module cards
        ══════════════════════════════════════ */}
        <div className="grid md:grid-cols-3 gap-px bg-[#002148]">
          {modules.map((m, i) => (
            <div key={i} className="bg-white flex flex-col">

              {/* Coloured header */}
              <div className={`${m.headerBg} px-6 py-5 flex items-center gap-3`}>
                <div className={`${m.iconBg} w-9 h-9 flex items-center justify-center flex-shrink-0 text-white`}>
                  {m.icon}
                </div>
                <div>
                  <div className="text-white font-black text-sm">{m.name}</div>
                  <div className="text-white/50 text-xs">{m.tagline}</div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {m.desc}
                </p>
                <ul className="space-y-2 mt-auto">
                  {m.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="w-4 h-4 bg-[#002148] flex-shrink-0 flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
