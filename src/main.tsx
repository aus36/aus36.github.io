import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import Resume from './pages/Resume.tsx'
import Projects from './pages/Projects.tsx'
import Contact from './pages/Contact.tsx'
import Experience from './pages/Experience.tsx'
import Skills from './pages/Skills.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.css'

const App = () => { // create router to manage links
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render( // render the router
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)