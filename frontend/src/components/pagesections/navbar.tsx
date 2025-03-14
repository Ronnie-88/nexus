import { NavLink } from "react-router";
import { fetchNavbarContent } from "../../api/fetchnavbarcontent";
import useContentFetcher from "../../hooks/usecontentfetcher";
import NavBar from "../../types/navbartype";
import LoadingIcon from "../icons/loadingicon";

export default function Navbar() {
  const { data: navBar, isLoading } = useContentFetcher<NavBar>(
    `${import.meta.env.VITE_NAVBARURL}`,
    fetchNavbarContent
  );

  if (isLoading) {
    return (
      <div className="h-screen w-screen text-white flex justify-center items-center">
        <LoadingIcon />
      </div>
    );
  }
  return (
    <>
      <div className="border-b bg-black border-slate-800 mx-auto text-white flex justify-between items-center px-96 fixed top-0 left-0 right-0 bottom-[94%]">
        {navBar && (
          <>
            <div className="border w-10 h-10 rounded-full flex items-center justify-center">
              <NavLink to="home">{navBar.initials}</NavLink>
            </div>
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
      <nav className="flex justify-between h-full items-center">
        <NavLink
          className="px-5 h-full flex justify-center items-center hover:bg-[#007acc]"
          to="home"
        >
          {navBar.buttonContent.home}
        </NavLink>
        <NavLink
          className="px-5 h-full flex justify-center items-center hover:bg-[#007acc]"
          to="about"
        >
          {navBar.buttonContent.about}
        </NavLink>
        <NavLink
          className="px-5 h-full flex justify-center items-center hover:bg-[#007acc]"
          to="projects"
        >
          {navBar.buttonContent.projects}
        </NavLink>
      </nav>
    </>
  );
}
