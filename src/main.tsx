import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/index.css'

const App = () => { // create router to manage links
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render( // render the router
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)