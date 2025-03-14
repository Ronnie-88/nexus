import useContentFetcher from "../../hooks/usecontentfetcher";
import { fetchProjectsSectionContent } from "../../api/fetchprojectssectioncontent";
import { useParams } from "react-router";
import VideoSection from "./videosection";
import { FaCloudDownloadAlt, FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import LoadingIcon from "../icons/loadingicon";

export default function ProjectDetails() {
  const { projectID } = useParams();
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
  const combinedProjectList = projects?.proProjectList.concat(
    projects.sideProjectList
  );
  const validProjectID = combinedProjectList?.find((project) => {
    return project.routeName === projectID;
  });

  return (
    <>
      {projects && validProjectID && (
        <>
          <section className="flex items-center mx-auto px-96 py-10 text-white my-10">
            <div>
              {validProjectID.name && (
                <h1 className="text-6xl my-4">{validProjectID.name}</h1>
              )}
              <div className="flex items-center justify-between gap-20">
                <div className="flex flex-col">
                  {validProjectID.projectdetails.role && (
                    <p className="text-4xl text-[#007acc] my-4">
                      Role: {validProjectID.projectdetails.role}
                    </p>
                  )}

                  {validProjectID.projectdetails.overview && (
                    <>
                      <h2 className="text-4xl text-[#007acc] my-3">Overview</h2>
                      <p className="max-w-2xl">
                        {validProjectID.projectdetails.overview}
                      </p>
                    </>
                  )}
                  <div className="flex gap-4 my-4">
                    {validProjectID.projectdetails.downloadlink && (
                      <a
                        href={validProjectID.projectdetails.downloadlink}
                        download={validProjectID.routeName}
                        target="_blank"
                        className="flex border border-[#007acc] w-32 rounded-lg justify-center items-center p-2 hover:bg-[#007acc] group"
                      >
                        <FaCloudDownloadAlt
                          size="2em"
                          className="text-[#007acc] group-hover:text-white"
                        />
                        <p className="text-sm ml-2">Download</p>
                      </a>
                    )}

                    {validProjectID.projectdetails.githublink && (
                      <a
                        href={validProjectID.projectdetails.githublink}
                        target="_blank"
                        className="flex border border-[#007acc] w-32 rounded-lg justify-center items-center p-2 hover:bg-[#007acc] group"
                      >
                        <FaGithub
                          size="2em"
                          className="text-[#007acc] group-hover:text-white"
                        />
                        <p className="text-sm ml-2">Repo</p>
                      </a>
                    )}

                    {validProjectID.projectdetails.sitelink && (
                      <a
                        href={validProjectID.projectdetails.sitelink}
                        target="_blank"
                        className="flex border border-[#007acc] w-32 rounded-lg justify-center items-center p-2 hover:bg-[#007acc] group"
                      >
                        <BsBoxArrowUpRight
                          size="2em"
                          className="text-[#007acc] group-hover:text-white"
                        />
                        <p className="text-sm ml-2">Vist site</p>
                      </a>
                    )}
                  </div>
                </div>
                {validProjectID.projectdetails.projectpic && (
                  <img
                    src={validProjectID.projectdetails.projectpic}
                    className="object-cover rounded-sm w-80"
                  />
                )}
              </div>
              {validProjectID.projectdetails.responsibilities && (
                <>
                  <h2 className="text-4xl text-[#007acc]">Responsibilities</h2>
                  <ul className="list-disc">
                    {validProjectID.projectdetails.responsibilities?.map(
                      (responsibility) => {
                        return <li>{responsibility}</li>;
                      }
                    )}
                  </ul>
                </>
              )}
            </div>
          </section>
          <section className="flex gap-8 items-center mx-auto px-96 py-10 text-white">
            {validProjectID.projectdetails.projectlink && (
              <a
                href={validProjectID.projectdetails.projectlink}
                target="_blank"
                className="hover:bg-[#007acccb] bg-[#007acc] border-none rounded-lg p-2 my-4 w-32"
              >
                Official Website
              </a>
            )}
          </section>
          {validProjectID.projectdetails.videolink && (
            <VideoSection videoLink={validProjectID.projectdetails.videolink} />
          )}
        </>
      )}
    </>
  );
}
