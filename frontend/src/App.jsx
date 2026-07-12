import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Highlights from "./components/Highlights"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollProgress from "./components/ScrollProgress"
import BackToTop from "./components/BackToTop"

function App() {

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
