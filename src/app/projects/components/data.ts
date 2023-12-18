export interface ProjectDataModel {
  title: string;
  company: string;
  url: string;
  description: string;
}

export const projectData: ProjectDataModel[] = [
  {
    title: "Spectrum",
    company: "Skybound Capital",
    url: "https://www.skyboundcapital.com",
    description:
      "I built a Loan Management System for dealing with loan information about invested companies. Built using React and .NET Core. I was responsible for building core data capture funcationality and making sure calculations for interest were correct. This was build using React and .NET Core",
  },
  {
    title: "TeyTrade",
    company: "Teybridge Capital",
    url: "https://teybridge.com",
    description:
      "I built a Trade Finance solution that managed the commodity exposure of Teybridge. It keeps track of all the commodities, the countries they are in, the market prices, and the value of these commodities taking into account the fees Teybridge is due.",
  },
];
