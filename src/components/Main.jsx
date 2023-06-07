import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub, FaTelegramPlane } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwindows10spotlight.com%2Fwp-content%2Fuploads%2F2020%2F08%2Fa57a663598e56ae7b5467be228112b82.jpg&f=1&nofb=1&ipt=bf0ce82dc526d5950b6f8b0e6939eecae1d2c9356c26edc25610b26a5133cace&ipo=images"
        alt="background image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div>
          <h1>I'm Radhey Patel</h1>
          <h2>
            I'm
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
          <div>
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaTelegramPlane className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
