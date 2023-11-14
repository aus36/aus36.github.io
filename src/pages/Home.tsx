import "../styles/Home.css"
// import Navbar from "../components/Navbar" TODO: will fix navbar later
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine, RecursivePartial, IOptions } from "tsparticles-engine";

function Home() {

  const particleOptions: RecursivePartial<IOptions> = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B"]
      },
      shape: {
        type: "change this to bring back the node shapes",
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
      }
    }
  };

  const particlesInit = useCallback(async (engine:Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <main>
      <Particles options={particleOptions} init={particlesInit}/>
      
      {/* <Navbar /> */}
      <div className='main-container'>
        <h1 className="name">Austin Hale</h1>
        <h3 className="position">Web/Mobile Developer</h3>
        <p className="bio">
          Welcome to my portfolio! I am a web/mobile developer with a passion for creating feature-rich applications, mainly using React and React Native. I am a graduate from
          Texas A&M University - Commerce with a Bachelor's in Computer Science. I am currenty working on a research team at TAMUC that is developing a decentralized contacts application.
          I am also working on personal projects to continue my mission of lifelong learning and to expand my skillset. My career goal is to be a software engineer.
        </p>
      </div>
    </main>
  )
}

export default Home