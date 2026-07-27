import {Hero} from "./components/Hero.tsx";
import {About} from "./components/About.tsx";
import {Skills} from "./components/Skills.tsx";
import {Nav} from "./components/Nav.tsx";
import {Projects} from "./components/Projects.tsx";
function App() {

  return (
    <div className="bg-charcoal min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />

    </div>
  )
}

export default App
