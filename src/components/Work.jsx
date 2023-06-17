import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    duration: "Sep 2022 - Apr 2023",
    company: "York University Robotics Society",
    position: "Junior Software Engineer",
    details:
      "Helped built a Mars rover that will compete internationally at the University Rover Challenge hosted by The Mars Society",
  },
  {
    duration: "Sep 2022 - Present",
    company: "University Education",
    position: "Student",
    details:
      "Completed introduction to computer science, introduction to web development, introduction to object-orientated programming, and discrete mathematics",
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
          duration={item.duration}
          company={item.company}
          position={item.position}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
