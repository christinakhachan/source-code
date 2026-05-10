import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 sm:px-12 bg-teal-900 text-teal-50 relative overflow-hidden scroll-mt-10">
      {/* Decorative background circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-800 rounded-full blur-3xl opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Quote className="w-12 h-12 text-teal-400/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-['Playfair_Display',serif] text-white mb-6"
        >
          Professional Philosophy
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl sm:text-3xl font-['Playfair_Display',serif] leading-snug mb-10 text-teal-200"
        >
          Understanding human behavior requires empathy, respect, and a non-judgmental approach.
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-teal-100/90 leading-relaxed font-light border-l-2 border-teal-500 pl-6"
        >
          As a psychology student, I value active listening, integrity, and professionalism, as they are essential in building trust and supporting others effectively. I approach challenges with a growth mindset, always seeking to learn and improve my understanding of psychological processes. My goal is to build a career in clinical psychology, with a focus on CBT and trauma, where I can help individuals better understand themselves and improve their mental well-being.
        </motion.p>
      </div>
    </section>
  );
}
