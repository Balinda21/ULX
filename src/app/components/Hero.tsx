"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── VIDEO ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay — deep navy, lighter on the right so video breathes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001a3a]/90 via-[#002148]/75 to-[#002148]/50" />

      {/* ── MAIN LAYOUT ── */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-16 pt-24 pb-16">
        <div className="flex items-center min-h-[80vh]">

          {/* ── LEFT: Frame + Content ── */}
          <div className="relative flex w-full items-center justify-start">

            {/* Frame image — the downloaded slider-item-1.png */}
            <div className="relative w-full max-w-[420px] h-[360px] sm:h-[480px] md:max-w-[500px] md:h-[560px] flex-shrink-0">
              <Image
                src="/slider-item-1.png"
                alt=""
                fill
                className="object-contain select-none pointer-events-none"
                priority
              />

              {/* Content sits INSIDE the frame */}
              <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 md:px-16 pb-4">

                {/* Eyebrow */}
                <div className="flex items-center gap-2 mb-3 sm:mb-5">
                  <span className="w-6 h-[2px] bg-[#C9970C]" />
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.25em]">
                    ULX · Rwanda
                  </span>
                </div>

                {/* Headline */}
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-[1.05] mb-3 sm:mb-5">
                  Transforming
                  <br />
                  <span className="text-[#C9970C]">Lives</span>{" "}
                  Through
                  <br />
                  Technology
                </h1>

                {/* Body */}
                <p className="text-white/65 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-8 max-w-xs hidden sm:block">
                  Rwanda&apos;s leading EdTech platform — delivering real-time
                  education monitoring powered by the Berulo App.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <a
                    href="#solutions"
                    className="bg-[#C9970C] text-white font-bold text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3 hover:bg-white hover:text-[#002148] transition-all duration-300 shadow-lg"
                  >
                    Explore Platform
                  </a>
                  <a
                    href="#contact"
                    className="border border-white/50 text-white font-bold text-xs sm:text-sm px-4 sm:px-7 py-2.5 sm:py-3 hover:bg-white hover:text-[#002148] transition-all duration-300"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
