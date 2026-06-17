import React from "react";

export const HomeSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1E3E85]">
      {/* Top Left Blob */}
      <div className="absolute -top-60 left-20 h-90 w-90 rounded-full bg-white/5" />

      {/* Bottom Right Blob */}
      <div className="absolute -bottom-10 right-100 h-90 w-90 rounded-full bg-white/5" />

      {/* Curved Line */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 500 C300 250, 700 750, 1600 300"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="3"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] md:min-h-[80vh] flex-col items-center justify-center gap-5 px-6 py-20 text-center">
        <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
          RemoteRecruit's Difference
        </h1>

        <p className="max-w-xs text-base font-light text-white/90 sm:max-w-lg sm:text-lg md:max-w-2xl md:text-xl lg:max-w-4xl">
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there's nothing but you, your talents, and the next step
          in your career.
        </p>
      </div>
    </section>
  );
};