import { Outlet } from "react-router";
import Navbar from "../pagesections/navbar";

export default function PageLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
