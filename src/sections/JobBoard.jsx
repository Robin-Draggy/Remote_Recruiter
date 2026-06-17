import React from "react";
import { SectionBtn } from "../components/ui/SectionBtn";
import { ProfileBadge } from "../components/ui/ProfileBadge";

export const JobBoard = () => {
  return (
    <section className="section flex flex-col lg:flex-row items-center justify-between gap-10">
      
      {/* LEFT */}
      <div className="flex flex-1 flex-col items-start space-y-6 lg:space-y-8">
        <SectionBtn title="Global Reach" />

        <h1 className="primary-text text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
          The First Fully Global Job Board, Anywhere, Ever
        </h1>

        <p className="secondary-text text-base sm:text-lg lg:text-xl font-normal leading-7 lg:leading-9 w-[95%]">
          RemoteRecruit connects candidates with opportunities around the world.
          With today’s remote-first workforce, you need to be able to find the
          best jobs and the best people for them, wherever they may be.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 justify-center lg:justify-end w-full">
        
        <div className="relative p-4 sm:p-6 lg:p-10 scale-[0.85] sm:scale-90 lg:scale-100 origin-center">
          
          {/* small dot */}
          <div className="absolute top-6 left-0 sm:top-10 sm:left-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]" />

          {/* blue icon */}
          <div className="absolute top-30 sm:top-50 right-0 sm:right-2 h-16 w-16 sm:h-22 sm:w-22 z-10 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center">
            <img
              src="/images/blue.svg"
              alt="RR"
              className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
            />
          </div>

          {/* badges */}
          <div className="absolute bottom-26 lg:bottom-50 left-0 scale-90 sm:scale-100">
            <ProfileBadge
              title="Python Developer"
              subtitle="Felonious Gru"
              titleColor="text-[#1E3E85]"
            />
          </div>

          <div className="absolute bottom-8 lg:bottom-20 left-10 sm:left-17 scale-90 sm:scale-100">
            <ProfileBadge
              title="Front End Wizard"
              subtitle="Mel Muselphiem"
              titleColor="text-[#52B4DA]"
            />
          </div>

          {/* main card */}
          <div className="h-80 w-65 sm:h-95 sm:w-[320px] lg:h-113 lg:w-88 rounded-4xl shadow-[14px_41px_100px_0px_#3159D31F] flex flex-col items-center pt-4">
            
            <div className="h-32 sm:h-40 w-[90%] rounded-2xl overflow-hidden">
              <img
                src="/images/pic2.png"
                alt=""
                className="h-full w-full object-cover object-top scale-110 sm:scale-120"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};