import { fetchNavbarContent } from "../api/fetchnavbarcontent";
import useContentFetcher from "../hooks/usecontentfetcher";
import NavBar from "../types/navbartype";
import useSWR from "swr";

export default function Navbar() {
  const { data: navBar, isLoading } = useContentFetcher<NavBar>(
    "http://localhost:5000/navbar",
    fetchNavbarContent
  );

  if (isLoading) {
    return (
      <div className="border-b border-slate-800 mx-auto text-white flex justify-between px-6">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <div className="border-b border-slate-800 mx-auto text-white flex justify-between px-96">
        {navBar && (
          <>
            <p>{navBar.initials}</p>
            <NavbarButtons navBar={navBar} />
          </>
        )}
      </div>
    </>
  );
}

interface NavbarButtonsProps {
  navBar: NavBar;
}

function NavbarButtons({ navBar }: NavbarButtonsProps) {
  return (
    <>
      <nav>
        <ul className="flex justify-between gap-2">
          <li className="border-r border-l border-slate-700">
            {navBar.buttonContent.home}
          </li>
          <li className="border-r border-l border-slate-700">
            {navBar.buttonContent.about}
          </li>
          <li className="border-r border-l border-slate-700">
            {navBar.buttonContent.projects}
          </li>
        </ul>
      </nav>
    </>
  );
}
