import React from "react";

interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex w-full gap-5 mt-5">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="bg-[rgba(38,38,39,1)] flex min-h-12 flex-col items-center justify-center flex-1 shrink basis-[0%] rounded-[40px] hover:bg-[rgba(48,48,49,1)] transition-colors"
        >
          <img
            src={link.icon}
            alt={link.label}
            className="aspect-[1] object-contain w-5"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
