import { motion, useScroll, useSpring } from "motion/react";
import CartoonCompanion from "./components/CartoonCompanion";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Goals from "./components/Goals";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Reflection from "./components/Reflection";
import Skills from "./components/Skills";
import StarBackground from "./components/StarBackground";
import TableOfContents from "./components/TableOfContents";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="min-h-screen bg-stone-50 text-stone-800 font-['Outfit',sans-serif] selection:bg-teal-200 overflow-x-hidden relative">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-teal-600 origin-left z-[60]"
          style={{ scaleX }}
        />

        <main className="flex flex-col relative z-10 w-full pb-20">
          <StarBackground />
          <Hero />
          <TableOfContents />
          <Goals />
          <Philosophy />
          <Reflection />

          <div id="cv" className="scroll-mt-10">
            <Education />
            <Experience />
          </div>

          <Portfolio />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
      <CartoonCompanion />
    </>
  );
}
