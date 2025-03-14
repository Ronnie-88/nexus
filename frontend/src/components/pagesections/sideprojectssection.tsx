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
    <section className="flex gap-8 items-center mx-auto px-96 py-10 text-white">
      <div className=" space-y-10">
        <h1 className="text-6xl">Side Projects</h1>
        {projects && (
          <>
            <ul className="flex gap-10">
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
