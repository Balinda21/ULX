export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001530] py-14">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
                <polygon points="4,17 12,4 20,17 12,30" fill="#C9970C" />
                <polygon points="14,17 22,4 30,17 22,30" fill="#C9970C" opacity="0.6" />
              </svg>
              <span className="text-white text-xl font-black tracking-widest uppercase">
                ULX
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              Unlimited Digital Solutions — delivering integrated, future-focused
              technology across education, community, and sustainable development.
            </p>
            <p className="text-white/30 text-xs">
              Kigali, Rwanda · info@berulo.org
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About ULX", href: "#about" },
                { label: "Our Solutions", href: "#solutions" },
                { label: "Impact", href: "#impact" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Our Platform
            </h4>
            <ul className="space-y-3">
              {[
                "Berulo Education",
                "Berulo UWI",
                "Berulo ECD",
                "Berulo App",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#solutions"
                    className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} ULX Ltd. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Powered by the Berulo App — transforming education in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
}
