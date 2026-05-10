import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] text-stone-900 mb-4">Education</h2>
          <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-stone-100 pl-8 ml-4 sm:ml-0 md:pl-0 md:border-none space-y-12">
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-stone-100 -translate-x-1/2" />

          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative md:w-1/2 md:pr-12 md:ml-0"
          >
            <div className="absolute -left-10 md:-right-3 md:left-auto top-1 w-6 h-6 bg-white border-4 border-teal-500 rounded-full md:translate-x-1/2 z-10" />
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-teal-600 mb-3">
                <GraduationCap className="w-5 h-5" />
                <span className="font-medium">2024 – 2027 (Expected)</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Bachelor of Arts in Clinical Psychology</h3>
              <p className="text-stone-500">Notre Dame University-Lebanon</p>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:w-1/2 md:pl-12 md:ml-auto"
          >
            <div className="absolute -left-10 md:-left-3 top-1 w-6 h-6 bg-white border-4 border-orange-400 rounded-full md:-translate-x-1/2 z-10" />
            <div className="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 text-orange-500 mb-3">
                <BookOpen className="w-5 h-5" />
                <span className="font-medium">2009 – 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Lebanese Baccalaureate - Life Sciences</h3>
              <p className="text-stone-500">Collège des Pères Antonins-Baabda</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
