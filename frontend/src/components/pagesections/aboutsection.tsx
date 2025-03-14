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
    <section className="flex gap-8 items-center  justify-center mx-auto px-96 py-10 my-10">
      {aboutsection && (
        <>
          <div className="grow max-w-[400px]">
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
