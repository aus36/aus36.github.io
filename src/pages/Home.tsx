import "../styles/Home.css"
// import Navbar from "../components/Navbar" TODO: will fix navbar later

function Home() {

  return (
    <main>
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