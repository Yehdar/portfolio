import React from "react";
import ProjectItem from "./ProjectItem";
import TCP from "../assets/projectbg/tcp_messager_working.png";
import EMAIL from "../assets/projectbg/email.png";
import RAINCHECK from "../assets/projectbg/raincheck.png";
import REMINDME from "../assets/projectbg/remindme.png";
import PORTFOLIO from "../assets/projectbg/portfolio.jpeg";
import WEBCRAWLER from "../assets/projectbg/webcrawler.jpeg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1540px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-400">
        Projects
      </h1>
      <p className="text-center py-8 text-white text-2xl">
        All of them are free and open-source for anybody to use
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={EMAIL}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={RAINCHECK}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={REMINDME}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={PORTFOLIO}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={WEBCRAWLER}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
      </div>
    </div>
  );
};

export default Projects;
