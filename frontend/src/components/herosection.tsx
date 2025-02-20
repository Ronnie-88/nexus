import { fetchHeroSectionContent } from "../api/fetchherosectioncontent";
import useContentFetcher from "../hooks/usecontentfetcher";
import HeroSection from "../types/herosectiontype";

export default function Herosection() {
  const { data: herosection, isLoading } = useContentFetcher<HeroSection>(
    "http://localhost:5000/herosection",
    fetchHeroSectionContent
  );

  if (isLoading) {
    return (
      <div className="border-b border-slate-800 mx-auto text-white flex justify-between px-6">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <section className="flex justify-between items-center mx-auto px-96">
      {herosection && (
        <>
          <div>
            <h1 className="text-6xl text-white">{herosection.name}</h1>
            <p className="text-white">{herosection.greeting}</p>
            <div className="flex">
              <p className="text-slate-400">{herosection.contact.email},</p>,
              <div className="w-8 border">
                <a href={herosection.contact.linkedinLink} target="_blank">
                  <img
                    className="bg-blue-400 object-fill"
                    src={herosection.contact.linkedinIcon}
                  />
                </a>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-8">
                <img
                  className="bg-black object-fill"
                  src={herosection.location.icon}
                />
              </div>
              <p className="text-white">{herosection.location.locationName}</p>
            </div>
          </div>
          <div className="w-14">
            <img
              className="object-cover"
              src="https://storage.cloud.google.com/nexus-home-page/c-plusplus-icon.png"
            />
          </div>
        </>
      )}
    </section>
  );
}
