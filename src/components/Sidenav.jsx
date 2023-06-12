import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { BsPerson, BsGithub, BsLinkedin } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        size={40}
        className="absolute top-4 right-4 z-[99] md:hidden rounded-lg shadow-lg bg-gray-100 shadow-gray-400 m-2 cursor-pointer hover:scale-110 ease-in duration-100"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/50 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-sky-100 shadow-gray-400 m-2 p-4 cursor-opinter hover:scale-110 ease-in dureation-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-sky-100 shadow-gray-400 m-2 p-4 cursor-opinter hover:scale-110 ease-in dureation-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Experience</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-sky-100 shadow-gray-400 m-2 p-4 cursor-opinter hover:scale-110 ease-in dureation-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="https://ca.linkedin.com/in/radhey-patel-"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-yellow-100 shadow-gray-400 m-2 p-4 cursor-opinter hover:scale-110 ease-in dureation-200"
          >
            <BsLinkedin size={20} />
            <span className="pl-4">Linkedin</span>
          </a>
          <a
            onClick={handleNav}
            href="https://github.com/yehdar"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-yellow-100 shadow-gray-400 m-2 p-4 cursor-opinter hover:scale-110 ease-in dureation-200"
          >
            <BsGithub size={20} />
            <span className="pl-4">Github</span>
          </a>
          <a
            onClick={handleNav}
            href="https://t.me/Yehdarr"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-yellow-100 shadow-gray-400 m-2 p-4 cursor-opinter hover:scale-110 ease-in dureation-200"
          >
            <FaTelegramPlane size={20} />
            <span className="pl-4">Telegram</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[32%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-sky-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-sky-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-sky-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="https://ca.linkedin.com/in/radhey-patel-"
            className="rounded-full shadow-lg bg-yellow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <BsLinkedin size={20} />
          </a>
          <a
            href="https://github.com/yehdar"
            className="rounded-full shadow-lg bg-yellow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://t.me/Yehdarr"
            className="rounded-full shadow-lg bg-yellow-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <FaTelegramPlane size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
