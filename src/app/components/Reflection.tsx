import { motion } from "motion/react";
import { MessageCircleHeart } from "lucide-react";

export default function Reflection() {
  return (
    <section id="reflection" className="py-24 px-6 sm:px-12 bg-stone-100 scroll-mt-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white p-10 sm:p-16 rounded-[3rem] shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-[100px] -z-0 opacity-50" />
          
          <div className="relative z-10">
            <div className="mb-8 p-4 bg-orange-100 text-orange-600 rounded-2xl inline-block">
              <MessageCircleHeart className="w-8 h-8" />
            </div>

            <h2 className="text-4xl font-['Playfair_Display',serif] text-stone-900 mb-8">Course Reflection</h2>
            
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-light">
              In Work Ready Now, I improved my communication by practicing presentations and class discussions. I learned to explain ideas more clearly and simply, especially psychological concepts. The course helped me become more confident, organized, and audience-focused—skills that are essential for a career in psychology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
