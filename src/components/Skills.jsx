import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import git from "../assets/git.svg";
import sass from "../assets/sass.svg";

const Skills = () => {
    const title = "Skills";
    const color = "black";
    const data = [
        { title: "Git", icon: git },
        { title: "Sass", icon: sass },
        { title: "Sass", icon: sass },
        { title: "Sass", icon: sass },
        { title: "Sass", icon: sass },
        { title: "Sass", icon: sass },
        { title: "Sass", icon: sass },
        { title: "Git", icon: git },
        { title: "Git", icon: git },
        { title: "Git", icon: git },
    ];
    return (
        <section className="max-w-360 mx-auto">
            <SectionTitle title={title} color={color} />
            <div className="grid grid-cols-5 gap-18">
                {data.map((card) => {
                    return <SkillCard {...card} />;
                })}
            </div>
        </section>
    );
};

export default Skills;
