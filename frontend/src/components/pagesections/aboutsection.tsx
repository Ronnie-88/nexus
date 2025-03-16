import { fetchAboutSectionContent } from "../../api/fetchaboutsectioncontent";
import useContentFetcher from "../../hooks/usecontentfetcher";
import About from "../../types/abouttype";
import LoadingIcon from "../icons/loadingicon";

export default function AboutSection() {
  const { data: aboutsection, isLoading } = useContentFetcher<About>(
    `${import.meta.env.VITE_ABOUTURL}`,
    fetchAboutSectionContent
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
      className=" sm:gap-8 sm:justify-between sm:items-center sm:py-10 sm:my-10 sm:px-24 
      lg:flex-row lg:px-48
      xl:px-96
    flex flex-col items-center my-2 py-10 px-5 w-full text-white"
    >
      {aboutsection && (
        <>
          <div
            className="sm:flex sm:flex-col
          lg:grow lg:max-w-xs
          xl:max-w-2xl xl:grow 
          my-2"
          >
            <h1 className="text-6xl my-4">About</h1>
            {aboutsection.about.map((paragragh: string, index) => {
              return (
                <p key={index} className="my-2">
                  {paragragh}
                </p>
              );
            })}
          </div>
          <div
            className="lg:w-96
            xl:min-w-96
          w-72 rounded-full overflow-hidden"
          >
            <img className="object-cover" src={aboutsection.aboutPic} />
          </div>
        </>
      )}
    </section>
  );
}
