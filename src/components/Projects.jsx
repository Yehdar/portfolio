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
          description="lightweight local network chatting app"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={EMAIL}
          name="Email Address Validator"
          description="validated domain names by checking TXT records"
          hyperlink="https://github.com/Yehdar/email-address-validator"
        />
        <ProjectItem
          bg={RAINCHECK}
          name="Raincheck"
          description="faster alternative to exiting-terminal solutions"
          hyperlink="https://github.com/Yehdar/raincheck"
        />
        <ProjectItem
          bg={REMINDME}
          name="RemindMe"
          description="set a reminder using the Ubuntu native alert box"
          hyperlink="https://github.com/Yehdar/remindme"
        />
        <ProjectItem
          bg={PORTFOLIO}
          name="Portfolio"
          description="place to showcase myself"
          hyperlink="https://github.com/Yehdar/yehdar.github.io"
        />
        <ProjectItem
          bg={WEBCRAWLER}
          name="Web Crawler"
          description="different take on web crawlers that search for broken links instead"
          hyperlink="https://github.com/Yehdar/broken-link-web-crawler"
        />
      </div>
    </div>
  );
};

export default Projects;
