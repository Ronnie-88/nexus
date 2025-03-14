import axios from "axios";
import About from "../types/abouttype";

export const fetchAboutSectionContent = async (
  url: string
): Promise<About | undefined> => {
  try {
    const response = await axios.get<About>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
