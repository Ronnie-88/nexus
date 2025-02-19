import { fetchNavbarContent } from "../api/fetchnavbarcontent";
import NavBar from "../types/navbartype";
import useSWR from "swr";

export default function Navbar() {
  const { data: navBar, isLoading } = useSWR<NavBar | undefined>(
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
      {/* <p> {JSON.stringify(navBar)}</p> */}
    </>
  );
}

// function useNavbar() {
//   const { data, error, isLoading } = useSWR(
//     "http://localhost:5000/navbar",
//     fetchNavbarContent
//   );
//   if (data) {
//     console.log(JSON.stringify(data));
//   } else {
//     console.log("data is undefined");
//   }

//   return { data, isError: error, isLoading };
// }
