import axios from "axios";
import Projects from "../types/projecttype";

export const fetchProjectsSectionContent = async (
  url: string
): Promise<Projects | undefined> => {
  try {
    const response = await axios.get<Projects>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
