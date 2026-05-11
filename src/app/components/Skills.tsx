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
    <section className="skills-section py-28 px-6 sm:px-12 bg-[#2b2136] text-stone-50 overflow-hidden relative">
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
              className="px-6 py-4 rounded-full border border-white/70 bg-white/90 backdrop-blur-sm text-[#3f2b52] shadow-sm font-light cursor-default hover:border-white hover:text-[#2f1f3f] hover:bg-white transition-all text-lg"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
