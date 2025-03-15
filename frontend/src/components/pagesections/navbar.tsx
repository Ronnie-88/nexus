import { NavLink } from "react-router";
import { fetchNavbarContent } from "../../api/fetchnavbarcontent";
import useContentFetcher from "../../hooks/usecontentfetcher";
import NavBar from "../../types/navbartype";
import LoadingIcon from "../icons/loadingicon";
import { RxArrowLeft, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Navbar() {
  const { data: navBar, isLoading } = useContentFetcher<NavBar>(
    `${import.meta.env.VITE_NAVBARURL}`,
    fetchNavbarContent
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resetMenuOpen = () => {
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen text-white flex justify-center items-center">
        <LoadingIcon />
      </div>
    );
  }
  return (
    <>
      <div
        // className="border-b bg-black border-slate-800 mx-auto text-white flex justify-end items-center fixed top-0 left-0 right-0 bottom-[93%]
        //  sm:sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:flex sm:justify-between sm:items-center sm:px-96bottom-[94%]"
        className={`border-b bg-black border-slate-800 mx-auto text-white fixed top-0 left-0 right-0 
          sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:flex sm:justify-between sm:items-center sm:px-96 sm:bottom-[94%]"
          ${
            isMenuOpen
              ? "flex flex-col items-center bottom-[50%]"
              : "flex justify-end items-center bottom-[93%]"
          }`}
      >
        {navBar && (
          <>
            <div
              className={`sm:hidden  ${
                isMenuOpen
                  ? "hidden"
                  : "px-5 grow max-w-28 h-full flex justify-center items-center list"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxHamburgerMenu className="text-[#007acc]" size="3em" />
            </div>
            <div
              className={`sm:hidden ${
                isMenuOpen ? "px-5 flex items-center w-full mb-auto" : "hidden"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <RxArrowLeft className="text-[#007acc]" size="4em" />
            </div>
            <div className="sm:border sm:w-10 sm:h-10 sm:rounded-full sm:flex sm:items-center sm:justify-center hidden">
              <NavLink to="home">{navBar.initials}</NavLink>
            </div>
            <NavbarButtons
              navBar={navBar}
              isMenuOpen={isMenuOpen}
              setMenuClose={resetMenuOpen}
            />
          </>
        )}
      </div>
    </>
  );
}

interface NavbarButtonsProps {
  navBar: NavBar;
  isMenuOpen: boolean;
  setMenuClose: () => void;
}

function NavbarButtons({
  navBar,
  isMenuOpen,
  setMenuClose,
}: NavbarButtonsProps) {
  return (
    <>
      <nav
        //className="sm:flex sm:flex-row sm:justify-between sm:h-full sm:items-center"
        className={`sm:flex sm:flex-row sm:justify-between sm:h-full sm:items-center ${
          isMenuOpen
            ? "flex flex-col justify-center items-center w-full gap-10 mb-auto"
            : "hidden"
        }`}
      >
        <NavLink
          className="px-5 h-full text-2xl sm:text-base flex justify-center  items-center hover:bg-[#007acc]"
          to="home"
          onClick={() => setMenuClose()}
        >
          {navBar.buttonContent.home}
        </NavLink>
        <NavLink
          className="px-5 h-full text-2xl sm:text-base flex justify-center items-center hover:bg-[#007acc]"
          to="about"
          onClick={() => setMenuClose()}
        >
          {navBar.buttonContent.about}
        </NavLink>
        <NavLink
          className="px-5 h-full text-2xl sm:text-base flex justify-center items-center hover:bg-[#007acc]"
          to="projects"
          onClick={() => setMenuClose()}
        >
          {navBar.buttonContent.projects}
        </NavLink>
      </nav>
    </>
  );
}
