import { motion } from "motion/react";
import { ArrowDown, BrainCircuit } from "lucide-react";
import profilePic from "../../imports/WhatsApp_Image_2026-05-06_at_11.15.34_PM.jpeg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 sm:px-12 overflow-hidden bg-stone-50">
      <div className="relative z-10 max-w-5xl mx-auto w-full mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="p-3 bg-teal-50 rounded-2xl shadow-sm">
            <BrainCircuit className="w-6 h-6 text-teal-700" />
          </div>
          <span className="text-teal-700 font-medium tracking-wide uppercase text-sm">Portfolio</span>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="shrink-0 w-32 h-32 sm:w-48 sm:h-48 rounded-[2rem] overflow-hidden shadow-xl border-4 border-white/80 rotate-3"
          >
            <ImageWithFallback 
              src={profilePic}
              alt="Christina Khachan"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-7xl font-['Playfair_Display',serif] font-medium leading-tight text-stone-900"
          >
            Christina <br />
            <span className="italic text-teal-800">Khachan</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -4 }}
          className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] border border-stone-200/50 shadow-sm"
        >
          <h3 className="text-sm font-medium tracking-widest uppercase text-teal-700 mb-4">Career Summary</h3>
          <p className="text-base sm:text-xl text-stone-700 leading-relaxed font-light">
            I am a psychology student at Notre Dame University with a strong interest in clinical psychology and mental health. I have gained experience in fast-paced and people-oriented environments, which strengthened my communication, adaptability, and interpersonal skills. I am skilled in research, critical thinking, and case analysis, with the ability to apply psychological concepts to real-life situations. I am known for my empathy, professionalism, and ability to connect with individuals from diverse backgrounds.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest uppercase text-stone-500 font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
