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
      className="flex sm:flex-row sm:gap-8 sm:justify-between sm:items-center sm:px-96 sm:py-10 sm:my-10
    flex-col items-center my-2 py-10 px-5"
    >
      {aboutsection && (
        <>
          <div className="sm:grow sm:max-w-2xl my-2">
            <h1 className="text-6xl text-white my-4">About</h1>
            {aboutsection.about.map((paragragh: string, index) => {
              return (
                <p key={index} className="text-white my-2">
                  {paragragh}
                </p>
              );
            })}
          </div>
          <div className="w-96 rounded-full overflow-hidden">
            <img className="object-cover" src={aboutsection.aboutPic} />
          </div>
        </>
      )}
    </section>
  );
}
