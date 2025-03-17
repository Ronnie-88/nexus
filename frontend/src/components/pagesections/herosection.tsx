import { fetchHeroSectionContent } from "../../api/fetchherosectioncontent";
import useContentFetcher from "../../hooks/usecontentfetcher";
import HeroSection from "../../types/herosectiontype";
import GithubIcon from "../icons/githubicon";
import GitLabIcon from "../icons/gitlabicon";
import LinkedinIcon from "../icons/linkedinicon";
import LoadingIcon from "../icons/loadingicon";

export default function Herosection() {
  const { data: herosection, isLoading } = useContentFetcher<HeroSection>(
    `${import.meta.env.VITE_HEROSECTIONURL}`,
    fetchHeroSectionContent
  );

  if (isLoading) {
    return (
      <div className="h-screen w-screen text-white flex justify-center items-center">
        <LoadingIcon />
      </div>
    );
  }
  return (
    <section
      className="sm:my-10 sm:py-5 sm:px-24 
    lg:px-48
    xl:px-48
    2xl:px-96
    w-full flex flex-col my-20 py-10 px-5 text-white"
    >
      {herosection && (
        <>
          <h1
            className="sm:my-4 
          text-6xl my-8"
          >
            {herosection.name}
          </h1>
          <p
            className=" sm:my-2 sm:w-[576px] 
          my-4 text-base w-96"
          >
            {herosection.greeting}
          </p>

          <p className="text-base text-slate-400 ">
            {herosection.contact.email}
          </p>
          <div
            className="sm:w-36 sm:gap-3 
          w-40 flex gap-5 my-2"
          >
            <a href={herosection.contact.linkedinLink} target="_blank">
              <LinkedinIcon />
            </a>
            <a href={herosection.contact.githubLink} target="_blank">
              <GithubIcon />
            </a>
            <a href={herosection.contact.gitlabLink} target="_blank">
              <GitLabIcon />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <div
              className="sm:w-6 
            w-6"
            >
              <img
                className="bg-black object-fill"
                src={herosection.location.icon}
              />
            </div>
            <p className="text-base text-nowrap">
              {herosection.location.locationName}
            </p>
          </div>
        </>
      )}
    </section>
  );
}
