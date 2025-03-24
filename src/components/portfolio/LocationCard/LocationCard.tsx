import React, { useState, useEffect } from 'react';
import "./style.css"
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
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const widthContainer = windowWidth < 938 ? "w-full" : "w-[186px]"
  const heightContainer = windowWidth < 938 ? "h-full" : "min-h-[212px]"

  return (
    <div className={(widthContainer) + " " + (heightContainer) + " " + "bg-[rgba(38,38,39,1)] p-6 rounded-[20px]"}>
      <div className="container">
    <div className="ring ping"></div>
    <a href="#" className="link-mynor"></a>
</div>
      <div className="flex w-full gap-[26px] text-lg text-[rgba(110,110,113,1)] font-bold whitespace-nowrap text-right leading-none justify-between">
        <img
          src={iconUrl}
          alt="Location icon"
          className="aspect-[0.79] object-contain w-[52px] shrink-0"
        />
        <div>{timezone}</div>
      </div>
      <div className="text-white text-2xl font-medium leading-9 mt-[26px] word-spacing-wider">
        <span className=" word-spacing-wide font-semibold text-[rgba(181,181,181,1)] font-montserrat">
          Based in{" "}
        </span>
        {windowWidth > 938 ? <br/> : ''}
        <span className="word-spacing-wider font-semibold font-montserrat">{location}</span>
        <div></div>
      </div>
    </div>
  );
};

export default LocationCard;
