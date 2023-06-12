import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="https://coolwallpapers.me/picsup/5602779-forest-fireflies-light-wallpapers.jpg"
        alt="background image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/0">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-100 bg-gray-900">
            I am Radhey Patel
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-100 bg-gray-900">
            {/* I'm */}
            <TypeAnimation
              sequence={[
                "an up-and-coming developer", // Types 'One'
                2000, // Waits 1s
                "a student at York University", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "looking forward to life", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] text-gray-200 w-full">
            <a href="https://ca.linkedin.com/in/radhey-patel-">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://github.com/yehdar">
              <FaGithub className="cursor-pointer" size={20} />
            </a>
            <a href="https://t.me/Yehdarr">
              <FaTelegramPlane className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
