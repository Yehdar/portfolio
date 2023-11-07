import React from "react";
import ProjectItem from "./ProjectItem";
import TCP from "../assets/projectbg/tcp_messager_working.png";
import EMAIL from "../assets/projectbg/email.png";
import RAINCHECK from "../assets/projectbg/raincheck.png";
import REMINDME from "../assets/projectbg/remindme.png";
import WATCHDOGS from "../assets/projectbg/watchdogs.png";
import LRUCACHE from "../assets/projectbg/lru_cache.png";
import STREAM from "../assets/projectbg/stream.png";
import BROBLOX from "../assets/projectbg/broblox.png";
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
          description="Chat App"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={EMAIL}
          name="Email Address Validator"
          description="CLI App"
          hyperlink="https://github.com/Yehdar/email-address-validator"
        />
        <ProjectItem
          bg={RAINCHECK}
          name="Raincheck"
          description="CLI App"
          hyperlink="https://github.com/Yehdar/raincheck"
        />
        <ProjectItem
          bg={REMINDME}
          name="RemindMe"
          description="CLI App"
          hyperlink="https://github.com/Yehdar/remindme"
        />
        <ProjectItem
          bg={WATCHDOGS}
          name="WatchDogs"
          description="gRPC App"
          hyperlink="https://github.com/Yehdar/watchdogs"
        />
        <ProjectItem
          bg={LRUCACHE}
          name="LRU Cache"
          description="Database Feat"
          hyperlink="https://github.com/The-Golang-Way/LRU-cache"
        />
        <ProjectItem
          bg={STREAM}
          name="Stream"
          description="Web App"
          hyperlink="https://github.com/Yehdar/stream"
        />
        <ProjectItem
          bg={BROBLOX}
          name="Broblox"
          description="Web App"
          hyperlink="https://github.com/Yehdar/broblox"
        />
        <ProjectItem
          bg={PORTFOLIO}
          name="Portfolio"
          description="Web App"
          hyperlink="https://github.com/Yehdar/yehdar.github.io"
        />
        <ProjectItem
          bg={WEBCRAWLER}
          name="Web Crawler"
          description="CLI App"
          hyperlink="https://github.com/Yehdar/broken-link-web-crawler"
        />
      </div>
    </div>
  );
};

export default Projects;
