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
      "Spectrum is a Loan Management System that is used for capturing loan information about companies. It was built using React and .NET Core. I was responsible for building core data capture funcationality and interest calculations",
  },
  {
    title: "TeyTrade",
    company: "Teybridge Capital",
    url: "https://teybridge.com",
    description:
      "Teytrade is a Trade Finance platform that manages commodity and and country exposure. It keeps track of all the commodities, the countries these commdities in, the market prices, and the value of these commodities. It was built using React and .NET Core",
  },
];
