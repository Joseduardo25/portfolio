
import React from "react";
import PortfolioButton from "./PortfolioButton";

interface ProjectCardProps {
  imageUrl: string;
  title: React.ReactNode;
  categories: string;
  buttonText: string;
  buttonIconUrl: string;
  onButtonClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  categories,
  buttonText,
  buttonIconUrl,
  onButtonClick,
}) => {
  return (
    <div className="bg-[rgba(38,38,39,1)] flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] p-6 rounded-[20px]">
      <img
        src={imageUrl}
        alt="Project"
        style={{
          aspectRatio: "50 / 42",
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
          objectPosition: "top"
        }}
        className="aspect-[1.45] object-contain w-full rounded-2xl"
      />
      <div className="w-full text-[rgba(181,181,181,1)] mt-6">
        <h3 className="text-2xl font-semibold leading-9 font-montserrat">{title}</h3>
        <p className="text-base font-normal mt-2 font-dmSans">{categories}</p>
      </div>
      <div className="mt-6">
        <PortfolioButton
          variant="white"
          icon={
            <img
              src={buttonIconUrl}
              alt="Arrow"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto cursor-pointer"
            />
          }
          onClick={onButtonClick}
        >
          {buttonText}
        </PortfolioButton>
      </div>
    </div>
  );
};

export default ProjectCard;
