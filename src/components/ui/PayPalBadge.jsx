import React from "react";

export const PayPalBadge = ({
  title,
  subtitle,
  titleColor = "text-gray-800",
  image = "/images/paypal.png",
}) => {
  return (
    <div className="flex items-center gap-3 sm:gap-4 w-64 lg:w-85 rounded-full bg-white shadow-[14px_13px_20px_0px_#8781F51C] px-3 py-2">
      {/* Avatar */}
      <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full p-1 shadow-[14px_13px_20px_0px_#8781F51C] flex items-center justify-center shrink-0">
        <div className="h-full w-full rounded-full bg-[linear-gradient(135deg,rgba(235,237,255,0.48)_0%,rgba(173,184,255,0.48)_100%)] p-1 flex items-center justify-center">
          <img
            src={image}
            alt="avatar"
            className="h-[55%] w-[55%] object-contain rounded-full"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight min-w-0">
        <h2
          className={`text-[10px] sm:text-xs font-semibold ${titleColor} truncate`}
        >
          {title}
        </h2>

        <p className="text-sm sm:text-lg font-medium text-[#11142D] truncate">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
