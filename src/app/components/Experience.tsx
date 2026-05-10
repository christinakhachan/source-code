import { Briefcase } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    role: "Hostess",
    type: "Freelance – Weddings & Events",
    date: "2025 – Present",
    color: "bg-teal-50",
    iconColor: "text-teal-600",
    bullets: [
      "Welcomed and assisted guests in dynamic environments",
      "Strengthened social confidence and ability to interact with diverse individuals",
      "Developed adaptability and professionalism",
      "Demonstrated strong interpersonal skills",
      "Created a comfortable and welcoming atmosphere",
    ],
  },
  {
    role: "Waitress / Banquet / Room Service",
    type: "Bossa Nova Beirut Hotel",
    date: "July 2025 – December 2025",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    bullets: [
      "Worked in a fast-paced environment with diverse clients",
      "Strengthened communication and interpersonal skills",
      "Maintained calmness under pressure",
      "Managed multiple tasks efficiently",
      "Demonstrated patience and problem-solving skills in challenging situations",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-24 px-6 sm:px-12 bg-stone-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] text-stone-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-stone-500 text-lg font-light">
            Building foundations in diverse, fast-paced environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${exp.color} p-8 sm:p-10 rounded-[2rem] hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 bg-white rounded-2xl shadow-sm ${exp.iconColor}`}
                >
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className={`text-sm font-medium ${exp.iconColor}`}>
                    {exp.date}
                  </span>
                  <h3 className="text-xl font-semibold text-stone-900">
                    {exp.role}
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">{exp.type}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-stone-600 font-light"
                  >
                    <span
                      className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0`}
                    />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
