import React from "react";

interface AboutCardProps {
  imageUrl: string;
  content: React.ReactNode;
}

export const AboutCard: React.FC<AboutCardProps> = ({ imageUrl, content }) => {
  return (
    <div className="bg-[rgba(38,38,39,1)] w-full text-lg text-[rgba(181,181,181,1)] font-medium leading-7 p-6 rounded-[20px]">
      <img
        src={imageUrl}
        alt="About me"
        className="aspect-[1.93] object-contain w-full rounded-xl"
      />
      <div className="mt-6">{content}</div>
    </div>
  );
};

export default AboutCard;
