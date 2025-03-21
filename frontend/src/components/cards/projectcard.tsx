import { Link } from "react-router";

interface ProjectCardProps {
  cardPic: string;
  name: string;
  routeName: string;
}

export default function ProjectCard({
  cardPic,
  name,
  routeName,
}: ProjectCardProps) {
  return (
    <>
      <div
        id="main card"
        className="sm:w-56 sm:space-y-1
        border-slate-800 w-80 border p-3 flex flex-col items-center space-y-2 rounded-md"
      >
        <img src={cardPic} className="object-cover rounded-sm" />
        <p id="card title">{name}</p>
        <Link
          to={routeName}
          className="hover:bg-[#007acccb] bg-[#007acc] border-none rounded-sm p-1"
        >
          Learn more
        </Link>
      </div>
    </>
  );
}
