import "../styles/Home.css"
import Navbar from "../components/Navbar"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import particleOptions from "../functions/particles";
import defaultpfp from "../assets/defaultpfp.png"
import Typewriter from "../components/Typewriter";

function Home() {

  const words = ["Web / Mobile Developer", "Researcher", "Project Manager"]

  const particlesInit = useCallback(async (engine:Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <img className="profile-pic" src = {defaultpfp} alt="Profile Pic"/>
        <h1 className="name">Austin Hale</h1>
        <Typewriter words={words}/>
        <p className="bioblock">Welcome to my portfolio! I am a web/mobile developer with a passion for creating feature-rich applications, mainly using React and React Native, as well as backends with NodeJS</p>
        <p className="bioblock">I am a graduate from Texas A&M University - Commerce with a Bachelor's in Computer Science. I am currently the lead developer and project manager of a research organization called <a className = "spairllink" href={"https://github.com/SPAIRL"}>SPAIRL</a> that is developing a contacts application using decentralized identity.</p>
        <p className="bioblock">I am currently looking for roles in web development, software engineering, or mobile development so that I may use my skills to create products that excel in every way.</p>
      </div>
      <Particles style = {{zIndex: 0}} options={particleOptions} init={particlesInit}/>
    </div>
  )
}

export default Home