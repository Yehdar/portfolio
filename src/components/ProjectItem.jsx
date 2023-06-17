import React from "react";

const ProjectItem = ({ bg, name, description, hyperlink }) => {
  return (
    <div className="border-solid border-4 border-yellow-500 relative flex justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-2xl group hover:bg-gradient-to-r from-yellow-400 to-yellow-400">
      <img
        src={bg}
        alt="/"
        className="rounded-xl object-cover group-hover:opacity-10"
      ></img>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-4xl font-bold text-white text-center">{name}</h3>
        <p className="pb-4 pt-2 text-gray-100 text-xl font-semibold text-center">
          {description}
        </p>
        <a href={hyperlink}>
          <p className="text-center p-3 rounded-lg bg-sky-950 text-gray-100 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
