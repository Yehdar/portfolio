import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "York University Robotics Society",
    duration: "8 Months",
    details:
      "Helped built a Mars rover that will compete internationally at the University Rover Challenge hosted by The Mars Society",
  },
  {
    year: 2022,
    title: "University Education",
    duration: "1 Year",
    details:
      "Completed introduction to computer science, introduction to web developmenet, introduction to object-orientated programming, and discrete mathematics",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl pb-6 font-bold text-center text-yellow-400">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
