import {Hero} from "./components/Hero.tsx";
import {About} from "./components/About.tsx";
import {Skills} from "./components/Skills.tsx";
import {Nav} from "./components/Nav.tsx";
import {Projects} from "./components/Projects.tsx";
import {Experience} from "./components/Experience.tsx";
import {Contact} from "./components/Contact.tsx";
import Chatbot from "./components/Chatbot.tsx";
function App() {

  return (
    <div className="bg-charcoal min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Chatbot />

    </div>
  )
}

export default App
