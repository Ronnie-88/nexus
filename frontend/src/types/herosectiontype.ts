import Contact from "./contacttype";
import Location from "./locationtype";

interface HeroSection {
  name: string;
  greeting: string;
  contact: Contact;
  location: Location;
  headShot: string;
}

export default HeroSection;
