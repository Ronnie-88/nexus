interface ProjectDetails {
  overview?: string;
  projectpic?: string;
  role?: string;
  responsibilities?: string[];
  projectlink?: string;
  videolink?: string;
  downloadlink?: string;
  githublink?: string;
  sitelink?: string;
}

interface ProjectCard {
  name: string;
  cardPic: string;
  routeName: string;
  projectdetails: ProjectDetails;
}

interface Projects {
  proProjectList: ProjectCard[];
  sideProjectList: ProjectCard[];
}

export default Projects;
