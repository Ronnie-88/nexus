import axios from "axios";
import HeroSection from "../types/herosectiontype";

export const fetchHeroSectionContent = async (
  url: string
): Promise<HeroSection | undefined> => {
  try {
    const response = await axios.get<HeroSection>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return;
  }
};
