import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Target, Sparkles } from "lucide-react";

export default function Goals() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="goals" className="py-24 px-6 sm:px-12 bg-stone-50 scroll-mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1763136524650-376409b665a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNhbG0lMjBtaW5kfGVufDF8fHx8MTc3ODA4ODA5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Abstract calm mind"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-900/10 transition-opacity duration-500 group-hover:opacity-0" />
          </div>
        </motion.div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="text-teal-700 font-medium tracking-wide uppercase text-sm mb-4">
              Future Vision
            </motion.h3>
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-['Playfair_Display',serif] text-stone-900 mb-8">
              Career Goals
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-stone-600 mb-10 text-lg font-light leading-relaxed">
              My short-term goal is to gain practical experience in psychology through internships and training, particularly in areas related to CBT and trauma. I aim to develop strong skills in assessment, communication, and therapeutic techniques. Long-term, I hope to pursue a master’s degree in clinical psychology and specialize in trauma-focused therapy, with the goal of helping individuals improve their mental health and overall well-being.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <div className="mb-4 bg-orange-100 p-3 rounded-xl inline-block text-orange-600">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-stone-900 font-medium text-lg mb-2">Short-term</h4>
                <p className="text-stone-500 font-light text-sm">Gain practical experience through internships and training in CBT and trauma. Develop strong assessment and therapeutic skills.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <div className="mb-4 bg-teal-100 p-3 rounded-xl inline-block text-teal-600">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-stone-900 font-medium text-lg mb-2">Long-term</h4>
                <p className="text-stone-500 font-light text-sm">Pursue a master's degree in clinical psychology, specializing in trauma-focused therapy to improve individuals' overall well-being.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
