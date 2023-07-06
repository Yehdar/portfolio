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
        Rewrites
      </h1>
      <p className="text-center py-8 text-white text-2xl">
        Currently, I am learning Rust and Go by rewritting famous software.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          bg={BLINK}
          name="Google's Blink"
          description="super simple rewrite of google chrome's rendering engine in rust"
          hyperlink="https://github.com/Yehdar/ghetto-blink-rewrite"
        />
        <ProjectItem
          bg={REDIS}
          name="Redis LRU Cache"
          description=" simple rewrite of the caching system in redis using Go. No algorithms, just data structures"
          hyperlink="https://github.com/Yehdar/ghetto-redis-LRU-cache-rewrite"
        />
        <ProjectItem
          bg={NMAP}
          name="NMAP Port Sniffer"
          description="simple rewrite of the pentesting tool, nmap's port sniffer in rust"
          hyperlink="https://github.com/Yehdar/ghetto-nmap-rewrite"
        />
        <ProjectItem
          bg={NGINX}
          name="NGINX Loadbalancer"
          description="recreated a super simple version of NGINX's loadbalancer in Go"
          hyperlink="https://github.com/Yehdar/ghetto-nginx-loadbalancer-rewrite"
        />
      </div>
    </div>
  );
};

export default Projects;
