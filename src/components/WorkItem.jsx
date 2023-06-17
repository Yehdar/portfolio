import React from "react";

const WorkItem = ({ duration, company, position, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-5">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p>
          <span className="text-3xl font-semibold text-yellow-400">
            {company}
          </span>
          <p className="text-right -mt-9">
            <span className="mx-20 inline-block px-2 py-1 font-semibold text-right text-white text-lg bg-yellow-600 rounded-md">
              {duration}
            </span>
          </p>
        </p>
        <p>
          <span className="my-1 text-lg font-normal leading-none text-gray-300">
            {position}
          </span>
        </p>
        <p className="my-2 text-2xl font-normal text-gray-50">{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
