import React from "react";
import AboutCard from "./AboutCard";
import SocialLinks from "./SocialLinks";
import ProjectShowcase from "./ProjectShowcase";
import FigmaResourceCard from "./FigmaResourceCard";
import ContactCard from "./ContactCard";
import LocationCard from "./LocationCard/LocationCard";
import ProjectCard from "./ProjectCard";

export const PortfolioSection: React.FC = () => {
  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/b82efdccfe3cbef816a4b0c89e4c5db821421f13?placeholderIfAbsent=true",
      url: "https://www.linkedin.com/in/eduardocalachua/",
      label: "LinkedIn",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/1870816c0c7a6e4c1b3f4ed9e736d4c139383fed?placeholderIfAbsent=true",
      url: "https://x.com/jocdwardo",
      label: "Twitter",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/c608126164d82bbbc7a28a22b87e9cf2120efb04?placeholderIfAbsent=true",
      url: "https://dribbble.com/Ernestoq",
      label: "Dribbble",
    },
  ];

  return (
    <section className="bg-[rgba(22,22,22,1)] flex items-center gap-2.5 overflow-hidden px-[198px] py-[140px] max-xl:px-5 max-xl:py-[100px] justify-center">
      <div className="self-stretch min-w-60 w-[1044px] my-auto max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <header className="w-full text-2xl font-semibold leading-none max-md:max-w-full">
            <div className="text-black text-[28px] font-medium leading-none max-md:max-w-full">
              👋{" "}
            </div>
            <div className="text-[rgba(181,181,181,1)] mt-3 max-md:max-w-full font-montserrat">
              Hey! I'm Eduardo,
            </div>
            <h1 className="text-white mt-3 max-md:max-w-full font-montserrat">
              a Software Developer based in Perú.
            </h1>
          </header>

          <div className="flex w-full gap-5 flex-wrap mt-6 max-md:max-w-full">
            <div className="min-w-60 grow shrink w-[291px]">
              <AboutCard
                // imageUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/9c357fad83b6ff68bbfbc2a3bb981bb34f80e33c?placeholderIfAbsent=true"
                imageUrl="assets/images/profile-photo.png"
                content={
                  <>
                    I specialize in{" "}
                    <span className="text-white font-dmSans">Front-end</span>, 
                    focusing on building scalable, web apps. For the past two years,{" "}
                    <span className="text-white font-dmSans">
                      I've helped teams create cohesive structures ecosystems that
                      enable developers to work faster and more
                      efficiently.
                    </span>
                  </>
                }
              />
              <SocialLinks links={socialLinks} />
            </div>

            <div className="min-w-60 grow shrink w-[587px] max-md:max-w-full">
              <div className="flex w-full gap-5 text-base flex-wrap max-md:max-w-full">
                <ProjectShowcase imageUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/6b55028980e6c256ac1fc61224cb281f25de89ef?placeholderIfAbsent=true" />
                <FigmaResourceCard
                  // imageUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/3647d45bcb4305bc192286e18afe87851bc994a8?placeholderIfAbsent=true"
                  imageUrl="assets/images/redux-boiler-plate.jpg"
                  title={
                    <>
                      <span className="font-medium font-dmSans">Boiler Plates: </span>
                      <span className="font-medium text-white font-dmSans">
                        A seamless way to start any project with pre-built structure.
                      </span>
                    </>
                  }
                  buttonText="Coming soon"
                />
              </div>

              <div className="flex w-full gap-5 flex-wrap mt-5 max-md:max-w-full">
                <ContactCard
                  title="Have a project in mind?"
                  description="Let's connect and collaborate to bring it to life!"
                  buttonText="Get in touch!"
                  onButtonClick={() => {
                    window.location.href = "https://www.linkedin.com/in/eduardocalachua/"
                  }}
                />
                <LocationCard
                  iconUrl="/assets/images/map.png"
                  timezone="GMT-5"
                  location="Lima, Perú"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgba(38,38,39,1)] w-full text-xl text-[rgba(106,106,108,1)] font-semibold text-center leading-[1.4] mt-5 px-5 py-3 rounded-[40px] max-md:max-w-full font-montserrat">
          Selected projects
        </div>

        <div className="flex w-full gap-5 flex-wrap mt-5 rounded-[20px] max-md:max-w-full">
          <ProjectCard
            // imageUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/62d29a385ec49f0114fc77848015ea082b8d39bf?placeholderIfAbsent=true"
            imageUrl="assets/images/nutripoint.png"
            title={
              <>
                Nutripoint -{" "}
                <span className="text-white font-montserrat">
                  An  e-commerce for a Multi-product Fitness nutrition web
                </span>
              </>
            }
            categories="VTEX · React · Tachions"
            buttonText="View project"
            buttonIconUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/18230f4baa58f0f7fe36f2e0bbda1df4f2c56ac3?placeholderIfAbsent=true"
            onButtonClick={() => {
              // redirect to /work/fluyez.html
              window.location.href = "/work/fluyez.html"
            }}
          />
          <ProjectCard
            // imageUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/a574776896d5b84143ded2d67d5767ea39e5e5d3?placeholderIfAbsent=true"
            imageUrl="assets/images/dashboard.png"
            title={
              <>
                <span className="text-[rgba(181,181,181,1)] font-montserrat">Mr Perkins - </span>
                <span className="text-white font-montserrat">
                An platform centralized on a dashboard to receive store metrics
                </span>
              </>
            }
            categories="React · Ant Design · Tailwind"
            buttonText="View project"
            buttonIconUrl="https://cdn.builder.io/api/v1/image/assets/04aca8dd9d7f417fadeff52fa29f8f19/18230f4baa58f0f7fe36f2e0bbda1df4f2c56ac3?placeholderIfAbsent=true"
            onButtonClick={() => {
              window.location.href = "/work/culqi.html"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
