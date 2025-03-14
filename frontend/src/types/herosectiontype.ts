import Contact from "./contacttype";
import Location from "./locationtype";

interface HeroSection {
  name: string;
  greeting: string;
  contact: Contact;
  location: Location;
}

export default HeroSection;
