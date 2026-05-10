import { motion } from "motion/react";

const skills = [
  "Active listening & communication",
  "Emotional intelligence & empathy",
  "Stress management & composure",
  "Teamwork & collaboration",
  "Time management & organization",
  "Adaptability & problem-solving",
  "Professional ethics"
];

export default function Skills() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-stone-900 text-stone-50 overflow-hidden relative">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/4 w-[100vw] h-[100vw] border-[1px] border-stone-800 rounded-full opacity-50 pointer-events-none"
      />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl sm:text-5xl font-['Playfair_Display',serif] mb-12"
        >
          Core Competencies
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-6 py-4 rounded-full border border-stone-700 bg-stone-800/50 backdrop-blur-sm text-stone-300 font-light cursor-default hover:border-teal-500 hover:text-teal-400 hover:bg-stone-800 transition-all text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
