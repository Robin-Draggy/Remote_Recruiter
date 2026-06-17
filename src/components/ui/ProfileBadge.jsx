import React from "react";

export const ProfileBadge = ({
  title,
  subtitle,
  titleColor = "text-gray-800",
  image = "/images/cartoon.png",
}) => {
  return (
    <div className="flex items-center gap-3 lg:gap-4 w-64 lg:w-85 rounded-full bg-white shadow-[14px_13px_20px_0px_#8781F51C] px-3 py-2">
      
      {/* Avatar */}
      <div className="h-12 w-12 lg:h-16 lg:w-16 rounded-full p-1 bg-[linear-gradient(132.56deg,#FFED43_5.63%,#F29939_106.18%)] shadow-[14px_13px_20px_0px_#8781F51C] flex items-center justify-center shrink-0">
        <div className="h-full w-full rounded-full bg-white p-1 flex items-center justify-center">
          <img
            src={image}
            alt="avatar"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-tight min-w-0">
        <h2 className={`text-[10px] lg:text-xs font-semibold ${titleColor} truncate`}>
          {title}
        </h2>

        <p className="text-sm lg:text-lg font-medium text-[#11142D] truncate">
          {subtitle}
        </p>
      </div>

    </div>
  );
};