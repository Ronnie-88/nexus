import ContentItem from "./contenttype";
import NavBar from "./navbartype";

interface Contact {
  email: string;
  linkedinLink: string;
  githubLink: string;
  gitlabLink: string;
}

interface Location {
  locationName: string;
  icon: string;
}

interface HeroSection {
  name: string;
  greeting: string;
  contact: Contact;
  location: Location;
  headShot: string;
}

interface HomePage {
  heroSection: HeroSection;
}

export default HomePage;
