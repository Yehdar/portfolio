import React from "react";
import { TypeAnimation } from "react-type-animation";
import background from "../assets/bg.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={background}
        alt="background image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl p-2 font-bold text-gray-100 bg-gray-900">
            I am Radhey Patel
          </h1>
          <h2 className="flex sm:text-3xl text-2xl p-2 pt-4 text-gray-100 bg-gray-900">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
