import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import AboutSection from "./components/pagesections/aboutsection.tsx";
import PageLayout from "./components/pages/pagelayout.tsx";
import HomePage from "./components/pages/homePage.tsx";
import ProjectsPage from "./components/pages/projectsPage.tsx";
import ProjectDetails from "./components/pagesections/projectdetailssection.tsx";
const routerNexus = createBrowserRouter([
  {
    path: "/",
    Component: PageLayout,
    children: [
      { path: "", Component: HomePage },
      { path: "home", Component: HomePage },
      { path: "about", Component: AboutSection },
      {
        path: "projects",
        Component: ProjectsPage,
        children: [{ path: ":projectID", Component: ProjectDetails }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routerNexus} />
  </StrictMode>
);
