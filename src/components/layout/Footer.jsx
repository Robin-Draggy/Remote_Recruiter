import React from "react";
import { FaCheck } from "react-icons/fa";
import { FaXmark, FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {

    const socials = [
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  
];

  const free = [
    "1 Active Job",
    "Basic List Placement",
    "Unlimited Job Applic",
    "Invite Anyone to Apply to Your Jobs",
  ];

  const premium = [
    "Unlimited Job Posts",
    "Instant Job Post Approval",
    "Premium List Placement",
    "Unlimited Job Applicants",
  ];

  return (
    <footer className="section bg-blue-500">
      <div className="flex flex-col items-center">
        <h1 className="primary-text text-2xl lg:text-4xl font-semibold">
          Help Is One Click Away
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-4 mt-16">
          {/* left card */}
          <div className="rounded-3xl flex items-center flex-col  bg-white p-6 gap-4 shadow-lg w-110 h-auto">
            <div className="flex items-center gap-8">
              <div className="bg-[#ECF2FF] flex items-center justify-center flex-col w-40 h-36 rounded-xl">
                <h2 className="text-[#52B4DA] text-3xl font-semibold">Free</h2>
                <p className="text-[#11142D65]">Basic</p>
              </div>
              <div className="space-y-3">
                {free.map((item, index) => {
                  const isDisabled = index >= free.length - 2;

                  return (
                    <div key={item} className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className={`
            h-5 w-5 rounded-full flex items-center justify-center
            ${
              isDisabled
                ? "bg-gray-200"
                : "bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)]"
            }
          `}
                      >
                        {isDisabled ? (
                          <div className="h-5 w-5 rounded-full flex items-center justify-center bg-[linear-gradient(132.56deg,#A2A3B8_5.63%,#808191_106.16%)]">
                            <FaXmark className="text-white text-[10px]" />
                          </div>
                        ) : (
                          <FaCheck className="text-white text-[10px]" />
                        )}
                      </div>

                      {/* Text */}
                      <p
                        className={`text-sm ${
                          isDisabled ? "text-[#808191]" : "text-[#323445]"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              <div className="p-[2px] rounded-2xl bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.18%)]">
                <button className="w-full py-3 rounded-2xl bg-white text-[#1E3E85] font-semibold">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          {/* right card */}
          <div className="rounded-3xl flex items-center flex-col  bg-white p-6 gap-4 shadow-lg w-110 h-auto">
            <div className="flex items-center gap-8">
              <div className="bg-[#ECF2FF] relative flex flex-2 items-center justify-center flex-col w-44 h-38 rounded-xl">
                <div className="absolute -top-4 left-0 flex items-center gap-3 rounded-full bg-[#C2EEFF] pl-2 pr-6 py-1 w-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center rounded-full bg-white w-6 h-6">
                    <img
                      src="/images/drop.png"
                      alt="drop"
                      className="w-4 h-4 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <p className="text-xs font-medium primary-text">Premium</p>
                </div>
                <h2 className="text-3xl font-semibold bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)] bg-clip-text text-transparent">
                  $79.99
                </h2>
                <p className="text-[#11142D65]">Per Month</p>
              </div>
              <div className="space-y-5 flex-3">
                {premium.map((item, index) => {
                  return (
                    <div key={item} className="flex items-center gap-3">
                      {/* Icon */}
                      <div
                        className={`
            h-5 w-5 rounded-full flex items-center justify-center bg-[linear-gradient(132.56deg,#52B4DA_5.63%,#1E3E85_106.16%)]
          `}
                      >
                        <FaCheck className="text-white text-[10px]" />
                      </div>

                      {/* Text */}
                      <p className={`text-sm text-[#323445] `}>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full">
              <button
                className="w-full py-3 rounded-2xl text-white font-semibold
             bg-[linear-gradient(129.98deg,#52B4DA_-106.35%,#1E3E85_95.25%)]
             shadow-[10px_0px_50px_0px_#3159D347]
             hover:opacity-95 transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        
<div className="flex items-center justify-between w-full mt-10">

  {/* Logo */}
  <div>
    <img src="/images/Menu.png" alt="logo" />
  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-3">

    {socials.map((Icon, index) => (
      <div
        key={index}
        className="h-10 w-10 rounded-full flex items-center justify-center
                   bg-[linear-gradient(135deg,rgba(235,237,255,0.15)_0%,rgba(173,184,255,0.15)_100%)]
                   hover:scale-105 transition"
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
    ))}

  </div>
</div>
      </div>
    </footer>
  );
};
