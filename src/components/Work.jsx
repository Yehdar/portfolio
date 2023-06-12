import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2016,
    title: "Astronaut",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, neque quidem rerum fuga tempora tenetur dicta minus tempore, expedita eaque, ipsum est rem optio qui velit dolorem inventore necessitatibus!",
  },
  {
    year: 2014,
    title: "Doctor",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor st amet consectetur adipisicing elit. Magni nulla, neque quidem rerum fuga tempora tenetur dicta minus tempore, expedita eaque, ipsum est rem optio qui velit dolorem inventore necessitatibus!",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-yellow-400">Work</h1>
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
