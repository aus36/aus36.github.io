import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import particleOptions from "../functions/particles";
import headshot from "../assets/headshot.jpg"
import Typewriter from "../components/Typewriter";

function Home() {

  const words = ["Web / Mobile Developer", "Researcher", "Project Manager"]

  const particlesInit = useCallback(async (engine:Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.main_container}>
      <Navbar />
      <div className={styles.content}>
        <img className={styles.profile_pic} src = {headshot} alt="Profile Pic"/>
        <h1 className={styles.name}>Austin Hale</h1>
        <Typewriter words={words}/>
        <p className={styles.bioblock}>Welcome to my portfolio! I am a full-stack developer with a passion for creating feature-rich applications, mainly using React, as well as backends with NodeJS, Python, or C#</p>
        <p className={styles.bioblock}>I am a graduate from Texas A&M Commerce with a Bachelor's in Computer Science and I have experience as a researcher in the decentralized tech space and a software engineer for a clean energy startup.</p>
      </div>
      <Particles style = {{zIndex: 0}} options={particleOptions} init={particlesInit}/>
    </div>
  )
}

export default Home