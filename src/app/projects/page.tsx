import React from "react";
import ProjectItem from "./components/ProjectItem";
import { ProjectDataModel, projectData } from "./components/data";

const Projects = () => {
  return (
    <div className="m-10 flex justify-start flex-col">
      <h1 className="font-bold text-3xl mb-10 ml-6">My Projects</h1>
      <div className=" flex-row ">
        {projectData.map((project: ProjectDataModel) => {
          return <ProjectItem project={project} key={project.title} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
