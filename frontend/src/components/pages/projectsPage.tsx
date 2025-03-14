import { Outlet, useLocation } from "react-router";
import ProfessionalProjectsSection from "../pagesections/professionalprojectssection";
import SideProjectsSection from "../pagesections/sideprojectssection";

export default function ProjectsPage() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/projects" ? (
        <>
          <ProfessionalProjectsSection />
          <SideProjectsSection />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}
