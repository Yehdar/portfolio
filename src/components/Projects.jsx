import React from "react";
import ProjectItem from "./ProjectItem";
import projectOne from "../assets/deer.jpeg";
import projectTwo from "../assets/lion.jpeg";
import projectThree from "../assets/elephant.jpeg";
import projectFour from "../assets/parrot.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex
        architecto sit, unde ipsam nisi? Mollitia soluta eligendi explicabo
        atque repellendus, magni eius, rem nam dolores porro veniam cum sequi!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={projectOne} title="Project One" />
        <ProjectItem img={projectTwo} title="Project Two" />
        <ProjectItem img={projectThree} title="Project Three" />
        <ProjectItem img={projectFour} title="Project Four" />
      </div>
    </div>
  );
};

export default Projects;
