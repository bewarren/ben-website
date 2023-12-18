import React from "react";
import { ProjectDataModel } from "./data";

const ProjectItem = ({ project }: { project: ProjectDataModel }) => {
  return (
    <figure className="md:flex bg-red-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-8">
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <figcaption className="font-medium">
          <h2 className="text-xl">{project.title}</h2>
          <a
            className="text-red-600 font-semibold dark:text-red-400"
            href={project.url}
          >
            <h3>{project.company}</h3>
          </a>
        </figcaption>
        <p className="text-lg font-medium">{project.description}</p>
      </div>
    </figure>
  );
};

export default ProjectItem;
