import { fetchProjectsSectionContent } from "../../api/fetchprojectssectioncontent";
import useContentFetcher from "../../hooks/usecontentfetcher";
import ProjectCard from "../cards/projectcard";
import LoadingIcon from "../icons/loadingicon";

export default function SideProjectsSection() {
  const { data: projects, isLoading } = useContentFetcher(
    `${import.meta.env.VITE_PROJECTSURL}`,
    fetchProjectsSectionContent
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
      lg:flex lg:items-center lg:px-48 lg:py-10 
      xl:px-96
      w-full my-20 py-10 px-5 text-white"
    >
      <div className=" sm:space-y-10">
        <h1 className="text-6xl my-4">Side Projects</h1>
        {projects && (
          <>
            <ul
              className="sm:grid sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
            lg:flex lg:flex-row lg:gap-10
            gap-5 flex flex-col items-center"
            >
              {projects.sideProjectList.map((projectCard) => {
                return (
                  <li>
                    {
                      <ProjectCard
                        cardPic={projectCard.cardPic}
                        name={projectCard.name}
                        routeName={projectCard.routeName}
                      />
                    }
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
