export interface buttonContent {
  home: string;
  about: string;
  projects: string;
}

interface NavBar {
  buttonContent: buttonContent;
  initials: string;
}

export default NavBar;
