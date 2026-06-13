import React from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import first from "../assets/image 771.svg";
import more from "../assets/Read More.svg";
import second from "../assets/image 770.svg";
import third from "../assets/image 772.svg"


const ProjectSection = () => {
  const data = [
    {
      img: first,
      number: "01",
      title: "Crypto Screener Application",
      text: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      icon: more,
    },
    {
      img: second,
      number: "02",
      title: "Euphoria - Ecommerce (Apparels) Website Template",
      text: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book when an unknown printer took a galley of type and scrambled it to specimen book.",
      icon: more,
    },
    {
      img: third,
      number: "03",
      title: "Crypto Screener Application",
      text: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      icon: more,
    },
  ];
  return (
    <div className="bg-black">
      <SectionTitle title="Projects" color="text-white" />
      <div>
        {data.map((item, index) => {
          if (index % 2 === 1) {
            return <ProjectCard {...item} className="flex-row-reverse" />;
          }
          return <ProjectCard {...item} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
