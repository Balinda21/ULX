import Image from "next/image";

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "(+250) 788 325 252",
    href: "tel:+250788325252",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "info@berulo.org",
    href: "mailto:info@berulo.org",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Kigali, Rwanda",
    href: "#",
  },
];

const socials = [
  { name: "LinkedIn", label: "Berulo Foundation", icon: "in" },
  { name: "Instagram", label: "berulofoundation", icon: "ig" },
  { name: "X / Twitter", label: "BeruloFoundati1", icon: "𝕏" },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-20">
        {/* items-stretch so both columns match height */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 2xl:gap-32 items-stretch">

          {/* ══════════════════════════════════════
              LEFT — Full-height image composition
          ══════════════════════════════════════ */}
          <div className="relative hidden lg:block">

            {/* Navy backdrop — offset behind image */}
            <div className="absolute top-8 left-8 right-0 bottom-0 bg-[#002148]" />

            {/* Image fills full column height */}
            <div className="relative h-full min-h-[700px] overflow-hidden shadow-2xl">
              <Image
                src="/images/3.jpeg"
                alt="ULX team — let's connect"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002148]/80 via-[#002148]/20 to-transparent" />

              {/* Bottom overlay text */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white font-black text-xl leading-snug mb-1">
                  Partner with ULX
                </div>
                <div className="text-white/55 text-sm">
                  Government · NGO · Investor · Institution
                </div>
              </div>

              {/* Small second image inset — bottom right corner */}
              <div className="absolute top-6 right-6 w-28 h-28 overflow-hidden ring-2 ring-white/30 shadow-xl">
                <Image
                  src="/images/2.jpeg"
                  alt="ULX team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Crimson badge — top-left */}
            <div className="absolute top-0 left-0 bg-[#C9970C] text-white px-6 py-4 shadow-xl z-10">
              <div className="text-2xl font-black leading-none">ULX</div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mt-1">
                Rwanda
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════
              RIGHT — Content + Form
          ══════════════════════════════════════ */}
          <div className="flex flex-col py-28 2xl:py-36">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-10 bg-[#C9970C]" />
              <span className="text-[#C9970C] text-xs font-bold uppercase tracking-[0.25em]">
                Reach Out
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#002148] leading-[1.08] mb-7">
              Let&apos;s Build the
              <br />
              <span className="text-[#C9970C]">Future Together</span>
            </h2>

            {/* Body */}
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Whether you&apos;re a government institution, NGO, investor, or
              partner — we&apos;d love to explore how ULX can serve your mission.
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap gap-6 mb-8">
              {contactItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="w-7 h-7 bg-[#002148] flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#C9970C] transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider font-bold leading-none mb-0.5">{item.label}</div>
                    <div className="text-[#002148] font-black text-xs">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-[#002148] uppercase tracking-widest mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#002148] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#002148] uppercase tracking-widest mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#002148] transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black text-[#002148] uppercase tracking-widest mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#002148] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#002148] uppercase tracking-widest mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="w-full px-4 py-3 border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#002148] transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-[#002148] uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your interest in ULX..."
                  className="w-full px-4 py-3 border border-gray-200 text-gray-800 placeholder-gray-300 focus:outline-none focus:border-[#002148] transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#002148] text-white font-bold py-4 text-sm uppercase tracking-widest hover:bg-[#C9970C] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Social */}
            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-4">
              <span className="text-gray-400 text-xs uppercase tracking-widest font-bold">
                Follow
              </span>
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  title={`${s.name}: ${s.label}`}
                  className="w-9 h-9 bg-[#f8f9fb] flex items-center justify-center text-[#002148] text-xs font-black hover:bg-[#002148] hover:text-white transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
