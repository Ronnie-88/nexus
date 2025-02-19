import axios from "axios";
import NavBar from "../types/navbartype";

export const fetchNavbarContent = async (
  url: string
): Promise<NavBar | undefined> => {
  try {
    const response = await axios.get<NavBar>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
