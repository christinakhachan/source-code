import { motion } from "motion/react";
import { ChevronRight, Bookmark } from "lucide-react";

const tocItems = [
  { title: "Career Goals", id: "goals" },
  { title: "Professional Philosophy", id: "philosophy" },
  { title: "Course Reflection", id: "reflection" },
  { title: "CV", id: "cv" },
  { title: "English Portfolio & Reflections", id: "portfolio" },
  { title: "My Projects", id: "projects" },
];

export default function TableOfContents() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 sm:px-12 bg-stone-100/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-600">
            <Bookmark className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] text-stone-900">
            Table of Contents
          </h2>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {tocItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className="group w-full flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm border border-stone-100 hover:border-teal-200 hover:shadow-md transition-all text-left"
            >
              <span className="text-lg font-medium text-stone-700 group-hover:text-teal-700 transition-colors">
                {item.title}
              </span>
              <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-teal-600 transition-colors" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
