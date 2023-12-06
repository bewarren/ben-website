import React from "react";
import ProjectItem from "./components/ProjectItem";
import { ProjectDataModel, projectData } from "./components/data";

const Projects = () => {
  return (
    <div className="m-10 flex justify-start">
      {projectData.map((project: ProjectDataModel) => {
        return <ProjectItem project={project} />;
      })}
    </div>
  );
};

export default Projects;
