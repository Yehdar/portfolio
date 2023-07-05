import React from "react";
import ProjectItem from "./RewritesItem.jsx";
import TCP from "../assets/projectbg/tcp_messager_working.png";
import BLINK from "../assets/projectbg/blink.jpeg";
import REDIS from "../assets/projectbg/redis.png";
import NMAP from "../assets/projectbg/nmap.jpeg";
import NGINX from "../assets/projectbg/nginx.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1540px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-400">
        Projects
      </h1>
      <p className="text-center py-8 text-white text-2xl">
        Currently, I am learning Rust and Go by rewritting famous software.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          bg={BLINK}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={REDIS}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={NMAP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={NGINX}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
        <ProjectItem
          bg={TCP}
          name="LAN Chat"
          description="local network chatting app in Python"
          hyperlink="https://github.com/Yehdar/LAN-party-chat"
        />
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
