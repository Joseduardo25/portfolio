import React from "react";
import PortfolioButton from "./PortfolioButton";

interface ProjectShowcaseProps {
  imageUrl: string;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  imageUrl,
}) => {
  const onGoToProjects = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }
  return (
    <div className="bg-[rgba(38,38,39,1)] relative flex min-w-60 min-h-[268px] flex-col overflow-hidden text-white font-bold justify-center flex-1 shrink basis-[0%] px-8 py-[35px] rounded-[20px]">
      <img
        src={imageUrl}
        alt="Project showcase"
        className="aspect-[1.28] object-contain w-[255px] self-center z-0 max-w-full rounded-lg"
      />
      <div onClick={onGoToProjects} className="bg-[rgba(22,22,22,0.62)] hover:bg-[#303031] absolute z-0 gap-3 overflow-hidden -translate-x-2/4 -translate-y-2/4 px-4 py-2 rounded-[200px] left-2/4 top-2/4 cursor-pointer">
        See my work
      </div>
    </div>
  );
};

export default ProjectShowcase;
