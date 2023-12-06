import React from "react";
import { ProjectDataModel } from "./data";

const ProjectItem = ({ project }: { project: ProjectDataModel }) => {
  return (
    <div className="w-60 h-60 rounded-lg border border-black mx-10">
      <h2>{project.title}</h2>
      <h3>{project.company}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectItem;
