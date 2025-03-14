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
    <section className="flex gap-8 items-center mx-auto px-96 py-10 my-10">
      {herosection && (
        <>
          <div className="grow max-w-lg">
            <h1 className="text-6xl text-white my-4">{herosection.name}</h1>
            <p className="text-white my-2">{herosection.greeting}</p>
            <p className="text-slate-400">{herosection.contact.email}</p>
            <div className="w-20 flex gap-1 my-2">
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
            <div className="flex gap-1">
              <div className="w-6">
                <img
                  className="bg-black object-fill"
                  src={herosection.location.icon}
                />
              </div>
              <p className="text-white">{herosection.location.locationName}</p>
            </div>
          </div>
          {/* <div className="w-3/6 border">
            <img
              className="object-cover"
              src="https://storage.cloud.google.com/nexus-home-page/c-plusplus-icon.png"
            />
          </div> */}
        </>
      )}
    </section>
  );
}
