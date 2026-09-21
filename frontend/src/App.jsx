import Navigation from "./components/Navigation";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Photography from "./sections/Photography";
import VideoEditing from "./sections/VideoEditing";
import CameraOperation from "./sections/CameraOperation";
import GraphicDesign from "./sections/GraphicDesign";
import PhotoEditing from "./sections/PhotoEditing";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <About />
        <Photography />
        <VideoEditing />
        <CameraOperation />
        <GraphicDesign />
        <PhotoEditing />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
