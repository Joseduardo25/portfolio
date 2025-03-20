import React from "react";

interface LocationCardProps {
  iconUrl: string;
  timezone: string;
  location: string;
}

export const LocationCard: React.FC<LocationCardProps> = ({
  iconUrl,
  timezone,
  location,
}) => {
  return (
    <div className="bg-[rgba(38,38,39,1)] min-h-[212px] w-[186px] p-6 rounded-[20px]">
      <div className="flex w-full gap-[26px] text-lg text-[rgba(110,110,113,1)] font-bold whitespace-nowrap text-right leading-none justify-between">
        <img
          src={iconUrl}
          alt="Location icon"
          className="aspect-[0.79] object-contain w-[52px] shrink-0"
        />
        <div>{timezone}</div>
      </div>
      <div className="text-white text-2xl font-medium leading-9 mt-[26px]">
        <span className="font-semibold text-[rgba(181,181,181,1)]">
          Based in{" "}
        </span>
        <br />
        <span className="font-semibold">{location}</span>
      </div>
    </div>
  );
};

export default LocationCard;
