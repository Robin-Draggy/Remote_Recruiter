import React from "react";
import { SectionBtn } from "../components/ui/SectionBtn";
import { ProfileBadge } from "../components/ui/ProfileBadge";
import { Play } from "lucide-react";
import { FaPlay } from "react-icons/fa";

export const TalentSection = () => {
  const stacks = [
    "Python Dev",
    "Javascript",
    "Front End",
    "Back End",
    "IOS Development",
    "+12",
  ];
  return (
    <section className="section flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* LEFT */}
      <div className="flex flex-1 flex-col items-start space-y-6 lg:space-y-8">
        <SectionBtn title="Custom Profile" />

        <h1 className="primary-text text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
          Showcase Your Talent
        </h1>

        <p className="secondary-text text-base sm:text-lg lg:text-xl font-normal leading-7 lg:leading-9 w-[95%]">
          Personalize your profile with everything that makes you unique. Add an
          introductory video and other media for a personal touch that stands
          out to employers and candidates.
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 justify-center lg:justify-end w-full">
        <div className="relative p-4 sm:p-6 lg:p-10 scale-[0.85] sm:scale-90 lg:scale-100 origin-center">
          {/* small dot */}
          <div className="absolute top-6 left-0 sm:top-10 sm:left-0 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]" />

          {/* blue icon */}
          <div className="absolute top-30 lg:top-50 right-0 lg:right-2 z-10 flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] p-1">
            <div className="flex h-full w-full items-center justify-center rounded-full">
              <img
                src="/images/cartoon.png"
                alt="RR"
                className="h-[90%] w-[90%] rounded-full object-cover"
              />
            </div>
          </div>
          {/* Play Button */}
          <div className="absolute top-20 lg:top-25 left-25 lg:left-45 z-10 scale-90 sm:scale-100">
            <div className="w-16 h-16 rounded-full bg-[#52B4DA7E] backdrop-blur-[5.44px] flex items-center justify-center">
              <FaPlay size={28} className="text-[#1E3E85]" />
            </div>
          </div>

          {/* badges */}
          <div className="absolute bottom-45 lg:bottom-45 -left-7 lg:left-0 scale-90 sm:scale-100">
            <ProfileBadge
              title="Past Client Feedback"
              subtitle="Best Developer Ever!"
              titleColor="text-[#1E3E85]"
            />
          </div>

          {/* main card */}
          <div className="h-100 w-80 lg:h-113 lg:w-88 rounded-4xl shadow-[14px_41px_100px_0px_#3159D31F] flex flex-col items-center justify-between pt-4">
            <div className="h-32 sm:h-40 w-[90%] rounded-2xl overflow-hidden">
              <img
                src="/images/pic1.png"
                alt=""
                className="h-full w-full object-cover object-center scale-110"
              />
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center py-4">
              {stacks.map((stack, index) => (
                <p
                  key={stack}
                  className={`
        text-xs px-3 py-2
        bg-[linear-gradient(132.56deg,rgba(87,153,235,0.1)_5.63%,rgba(159,116,251,0.1)_106.18%)]
        ${index === stacks.length - 1 ? "w-fit rounded-full" : "rounded-lg"}
      `}
                >
                  <span className="bg-[linear-gradient(131.63deg,#336DA6_6.87%,#1E3E85_106.04%)] bg-clip-text text-transparent font-medium">
                    {stack}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
