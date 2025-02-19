export interface buttonContent {
  about: string;
  home: string;
  projects: string;
}

interface NavBar {
  initials: string;
  buttonContent: buttonContent;
}

export default NavBar;
