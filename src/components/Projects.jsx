import React from "react";
import ProjectItem from "./ProjectItem";
import TCP from "../assets/tcp_messager_working.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-400">
        Projects
      </h1>
      <p className="text-center py-8 text-white text-2xl">
        Currently, I am learning Golang and Rust by rewritting famous software.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
      </div>
    </div>
  );
};

export default Projects;
