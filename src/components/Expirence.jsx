import SectionTitle from "./SectionTitle";
import apple from "../assets/apple.svg"
import google from "../assets/google.svg"
import youtube from "../assets/youtube.svg"
import ExperienceCard from "./ExpirienceCard"

const Experience = () => {
    const data = [
        {
            title: "Lead Software Engineer at Google",
            icon: google,
            data: "Nov 2019 - Present",
            text: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
        },
        {
            title: "Software Engineer at Youtube",
            icon: youtube,
            data: "Jan 2017 - Oct 2019",
            text: "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
        },
        {
            title: "Junior Software Engineer at Apple",
            icon: apple,
            data: "Jan 2016 - Dec 2017",
            text: "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team."
        }
    ];
        
    
  return <section className="bg-black py-15 px-20 mt-20">
    <SectionTitle title="Experience" color="text-white" />
    <div>
      <div className="flex flex-col gap-8 ">
        {data.map((item) => {
            return <ExperienceCard {...item} />;
        })}
      </div>
    </div>
  </section>;
  
}

export default Experience