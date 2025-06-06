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
        style={{
          aspectRatio: "51 / 31",
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
          objectPosition: "center 12%"
        }}
        alt="About me"
        className="aspect-[1.93] object-contain w-full rounded-xl"
      />
      <div className="mt-6 font-dmSans">{content}</div>
    </div>
  );
};

export default AboutCard;
