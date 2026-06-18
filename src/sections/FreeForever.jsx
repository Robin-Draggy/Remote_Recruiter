import React from "react";
import { ProfileBadge } from "../components/ui/ProfileBadge";
import { SectionBtn } from "../components/ui/SectionBtn";
import { Check } from "lucide-react";
import { PayPalBadge } from "../components/ui/PayPalBadge";

export const FreeForever = () => {

  const data = [
    "Up to 25 active job posts",
    "Premium Placement & Visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited invites to jobseekers"
  ]

  return (
    <section className="section flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* LEFT */}
      <div className="flex flex-1 justify-center lg:justify-start w-full">
        <div className="relative p-4 lg:p-6 lg:p-10 scale-[0.85] lg:scale-90 lg:scale-100 origin-center">
          {/* small dot */}
          <div className="absolute top-10 -left-2 lg:top-10 lg:left-0 h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85]" />

          {/* blue icon */}
          <div className="absolute top-20 lg:top-30 right-0 lg:right-2 h-16 w-16 lg:h-22 lg:w-22 z-10 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center">
            <img
              src="/images/blue.svg"
              alt="RR"
              className="h-10 w-10 lg:h-14 lg:w-14 object-contain"
            />
          </div>

          {/* badges */}
          <div className="absolute bottom-8 lg:bottom-20 -left-7 lg:left-0 scale-90 lg:scale-100">
            <PayPalBadge
              title="Upcoming Payment In…"
              subtitle="14 Days - $79.99"
              titleColor="text-[#1E3E85]"
            />
          </div>

          {/* main card */}
          <div className="h-100 w-80 lg:h-113 lg:w-88 rounded-4xl shadow-[14px_41px_100px_0px_#3159D31F] flex flex-col items-start pt-4">
            <div className="flex flex-col items-start space-y-3 p-4">
              <div className="flex items-start justify-start flex-col space-y-1">
                <h3 className="text-[#808191] capitalize text-xs">
                  Your Membership Tier
                </h3>
                <h2 className="capitalize text-xl font-semibold bg-gradient-to-r from-[#52B4DA] to-[#1E3E85] bg-clip-text text-transparent">
                  Premium
                </h2>
              </div>
              <div className="flex items-start justify-start flex-col space-y-3">
                <h3 className="text-[#808191] uppercase tracking-widest text-[10px]">
                  features
                </h3>
                <div>
                  {data.map((item) => (
                    <div key={item} className="flex items-center gap-4 space-y-3.5">
                      <div className="w-4 h-4 rounded-full bg-linear-to-r from-[#52B4DA] to-[#1E3E85] flex items-center justify-center">
                        <Check className="text-white" size={10} />
                      </div>
                      <p className="text-[#323445E6] text-xs lg:text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-1 flex-col items-start space-y-6 lg:space-y-8">
        <SectionBtn title="Actually Fee Free" />

        <h1 className="primary-text text-2xl lg:text-3xl lg:text-4xl font-medium leading-tight">
          Fee-Free Forever
        </h1>

        <p className="secondary-text text-base lg:text-lg lg:text-xl font-normal leading-7 lg:leading-9 w-[95%]">
          We don’t charge you fees and we don’t put up paywalls. We’re the
          bridge that connects job opportunities with the best candidates, with
          no middleman involved.
        </p>
      </div>
    </section>
  );
};
