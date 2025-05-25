
import React, { useState, useEffect } from 'react';
import PortfolioButton from "./PortfolioButton";

interface FigmaResourceCardProps {
  imageUrl: string;
  title: React.ReactNode;
  buttonText: string;
}

export const FigmaResourceCard: React.FC<FigmaResourceCardProps> = ({
  imageUrl,
  title,
  buttonText,
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

  const widthContainer = windowWidth < 938 ? "w-full" : "w-[272px]"
  return (
    <div className="bg-[rgba(38,38,39,1)] flex min-w-60 min-h-[268px] flex-col overflow-hidden items-center flex-1 shrink basis-16 rounded-[20px] border-[rgba(38,38,39,1)] border-solid border-4">
      <img
      style={{
        aspectRatio: "80 / 31",
        width: "100%",
        height: "auto",
        objectFit: "cover",
        display: "block",
        objectPosition: "center 12%"
      }}
        src={imageUrl}
        alt="Figma resource"
        // className="aspect-[2.58] object-contain w-80 max-w-full"
        className="w-full h-full object-cover"
      />
      <div className={(widthContainer) + '' +"flex flex-col items-stretch mx-4 mt-4"}>
        <div className="text-[rgba(181,181,181,1)] font-normal leading-6 font-dmSans">
          {title}
        </div>
        <div className="my-4">
          <PortfolioButton
            variant="outline"
            className="text-[rgba(106,106,108,1)] opacity-70 cursor-default pointer-events-none font-montserrat "
          >
            {buttonText}
          </PortfolioButton>
        </div>
      </div>
    </div>
  );
};

export default FigmaResourceCard;
