import "../styles/Home.css"
import Navbar from "../components/Navbar"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import particleOptions from "../functions/particles";
import defaultpfp from "../assets/defaultpfp.png"

function Home() {

  const particlesInit = useCallback(async (engine:Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="main-container">
      <Navbar />
      <div className="content">
        <img className="profile-pic" src = {defaultpfp} alt="Profile Pic"/>
        <h1 className="name">Austin Hale</h1>
        <h3 className="position">Web/Mobile Developer | Researcher | Project Manager</h3>
        <p className="bio">
          Welcome to my portfolio! I am a web/mobile developer with a passion for creating feature-rich applications, mainly using React and React Native. I am a graduate from
          Texas A&M University - Commerce with a Bachelor's in Computer Science. I am currenty working on a research team at TAMUC that is developing a decentralized contacts application.
          I am also working on personal projects to continue my mission of lifelong learning and to expand my skillset.
        </p>
      </div>
      <Particles options={particleOptions} init={particlesInit}/>
    </div>
  )
}

export default Home