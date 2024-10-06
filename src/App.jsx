import './App.css'
import NavBar from "./components/01_NavBar/NavBar"
import About from './components/02_About/About'
import Skills from './components/03_Skills/Skills'
import Projects from './components/04_Projects/Projects'
import Contact from './components/05_Contact/Contact'

function App() {

  return (
    <>
      <NavBar />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}

export default App
