import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <TechStack />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <Experience />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
