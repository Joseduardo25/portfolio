import React from "react";
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
  return (
    <div className="bg-[rgba(38,38,39,1)] flex min-w-60 min-h-[268px] flex-col overflow-hidden items-center flex-1 shrink basis-16 rounded-[20px] border-[rgba(38,38,39,1)] border-solid border-4">
      <img
        src={imageUrl}
        alt="Figma resource"
        className="aspect-[2.58] object-contain w-80 max-w-full"
      />
      <div className="flex w-[272px] max-w-full flex-col items-stretch mt-4">
        <div className="text-[rgba(181,181,181,1)] font-normal leading-6">
          {title}
        </div>
        <PortfolioButton
          variant="outline"
          className="text-[rgba(106,106,108,1)] mt-4"
        >
          {buttonText}
        </PortfolioButton>
      </div>
    </div>
  );
};

export default FigmaResourceCard;
