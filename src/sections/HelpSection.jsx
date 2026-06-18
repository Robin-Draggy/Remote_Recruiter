import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export const HelpSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[70vh] bg-[linear-gradient(132.56deg,rgba(87,153,235,0.2)_5.63%,rgba(159,116,251,0.2)_106.18%)] flex flex-col-reverse lg:flex-row">

      {/* White blobs */}
      <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/30 z-0" />
      <div className="absolute -top-20 -right-24 h-72 w-72 rounded-full bg-white/30 z-0" />
      <div className="absolute -bottom-10 left-[40%] -translate-x-1/2 h-60 w-60 rounded-full bg-white/30 z-0" />

      {/* LEFT */}
      <div className="relative z-10 flex-1 flex items-end">
        <div className="bg-white pt-4 pr-4 rounded-tr-3xl mt-auto h-[80%]">
          <img
            src="/images/pic2.png"
            alt="hero"
            className="
              w-[320px]
              lg:w-140
              object-cover
              origin-top
              rounded-tr-3xl
              drop-shadow-2xl
            "
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-12 py-12 gap-6">

        <p className="text-[#1E3E85] font-semibold tracking-[0.2em] uppercase">
          Are you ready?
        </p>

        <h1 className="primary-text text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-md">
          Help is only a few clicks away!
        </h1>

        <p className="text-[#767784] text-base lg:text-lg max-w-sm">
          Click below to get set up super quickly and find help now!
        </p>

        <button className="flex items-center gap-4 pl-2 pr-5 py-2 rounded-full bg-[#52b3da3f] hover:bg-[#52b3da55] transition">
          <div className="w-8 h-8 rounded-full bg-[#52B4DA] flex items-center justify-center">
            <FaArrowRightLong className="text-white" />
          </div>

          <span className="capitalize text-[#1E3E85] text-base font-medium">
            Get Started
          </span>
        </button>

      </div>
    </section>
  );
};