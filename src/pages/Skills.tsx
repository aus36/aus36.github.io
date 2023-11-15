import Navbar from "../components/Navbar";
import SkillCard from "../components/Skillcard";
import "../styles/Skills.css"
import reactlogo from "../assets/react.png"
import nodeJSlogo from "../assets/nodejs.png"

const Skills = () => {
    return (
        <div className = "skills-container">
            <h1 className="skillsHeader">Skills</h1>
            <Navbar />
            <div className="skills-content">
                <SkillCard skillName={"React"} iconPath={reactlogo}/>
                <SkillCard skillName={"NodeJS"} iconPath={nodeJSlogo}/>
            </div>
        </div>
    );
}

export default Skills;