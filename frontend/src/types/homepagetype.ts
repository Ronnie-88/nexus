import NavBar from "./navbartype";

interface Contact {
  email: string;
  linkedinLink: string;
  linkedinIcon: string;
}

interface Location {
  locationName: string;
  icon: string;
}

interface ContentItem {
  name: string;
  icon: string;
}

interface HeroSection {
  name: string;
  greeting: string;
  contact: Contact;
  location: Location;
  headShot: string;
}

interface ProgrammingLanguagesSection {
  cPlusPlusContent: ContentItem;
  cSharpContent: ContentItem;
  javaContent: ContentItem;
  typescriptContent: ContentItem;
  javascriptContent: ContentItem;
  cssContent: ContentItem;
  htmlContent: ContentItem;
}

interface TechSection {
  UEContent: ContentItem;
  unityContent: ContentItem;
  gitContent: ContentItem;
  expressContent: ContentItem;
  nodeContent: ContentItem;
  reactContent: ContentItem;
}

interface HomePage {
  navBar: NavBar;
  heroSection: HeroSection;
  programmingLanguagesSection: ProgrammingLanguagesSection;
  techSection: TechSection;
}

export default HomePage;
