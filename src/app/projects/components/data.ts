export interface ProjectDataModel {
  title: string;
  company: string;
  description: string;
}

export const projectData: ProjectDataModel[] = [
  {
    title: "Spectrum",
    company: "Skybound Capital",
    description:
      "Built a Loan Management System called Spectrum. This is used for as an internal tool for storing loan information about invested companies. Built using React and .NET Core",
  },
  {
    title: "TeyTrade",
    company: "Teybridge Capital",
    description:
      "Built a Trade Finance solution that managed the commodity exposure of Teybridge. It keeps track of all the commodities, the countries they are in, the market prices, and the value of these commodities taking into account the fee Teybridge is due.",
  },
];
