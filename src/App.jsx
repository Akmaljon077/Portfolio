import Expirence from "./components/Expirence";
import ExpirienceCard from "./components/ExpirienceCard";
import Header from "./components/Header";
import ProjectSection from "./components/ProjectSection";
// import SectionTitle from "./components/SectionTitle";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

const App = () => {
    return (
        <div className="font-sora">
            <Header />
            <Skills />
            <Expirence /> 
            <ProjectSection />
            <Testimonial />
            {/* <SectionTitle title="Projects" color="black" /> */}
        </div>
    );
};

export default App;
