
import React from "react";
import Badge from "./Badge";
import PortfolioButton from "./PortfolioButton";

interface ContactCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="bg-[rgba(38,38,39,1)] flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] p-6 rounded-[20px]">
      <div className="flex w-full flex-col items-stretch">
        <Badge status="available" />
        <div className="w-full mt-4">
          <h3 className="text-white text-xl font-semibold leading-[1.4]">
            {title}
          </h3>
          <p className="text-[rgba(181,181,181,1)] text-base font-medium mt-2">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-7">
        <PortfolioButton
          variant="outline"
          onClick={onButtonClick}
        >
          {buttonText}
        </PortfolioButton>
      </div>
    </div>
  );
};

export default ContactCard;
