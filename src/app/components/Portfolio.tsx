import { ArrowRight, FileText, Image, Video } from "lucide-react";
import { motion } from "motion/react";

// Import PDFs
import big5Image from "../../imports/Big5.jpeg";
import commPdf from "../../imports/communication_comic _strip.pdf";
import eqPdf from "../../imports/Emotional_Intelligence.pdf";
import shadowingPdf from "../../imports/Job_Shadowing_-_Christina_Khachan.pdf";
import learningStylePdf from "../../imports/Learning-Style.pdf";
import pdpPdf from "../../imports/My_Professional_Development_Plan_2.pdf";
import tree from "../../imports/tree.jpeg";
import vres from "../../imports/vres.mp4";
const coursework = [
  {
    title: "My Professional Development Plan",
    desc: "A comprehensive plan detailing my short-term and long-term career aspirations, skill development, and action steps.",
    file: pdpPdf,
    color: "bg-teal-50 hover:bg-teal-100",
    iconColor: "text-teal-600",
    icon: "file",
  },
  {
    title: "The Big 5 Exercise",
    desc: "An analysis of my personality traits and how they align with my professional approach in psychology.",
    file: big5Image,
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
    icon: "image",
  },
  {
    title: "Job Shadowing",
    desc: "Reflections and insights gained from real-world observation in professional psychological settings.",
    file: shadowingPdf,
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
    icon: "file",
  },
  {
    title: "Learning Style",
    desc: "An assessment of my personal learning methods and how I adapt to new educational challenges.",
    file: learningStylePdf,
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "text-purple-600",
    icon: "file",
  },
  {
    title: "Emotional Intelligence",
    desc: "An evaluation of EQ competencies crucial for empathy, understanding, and clinical practice.",
    file: eqPdf,
    color: "bg-rose-50 hover:bg-rose-100",
    iconColor: "text-rose-600",
    icon: "file",
  },
  {
    title: "Communication Comic Strip",
    desc: "This sample shows how clear communication improves teamwork and prevents confusion.",
    file: commPdf,
    color: "bg-teal-50 hover:bg-teal-100",
    iconColor: "text-teal-600",
    icon: "file",
  },
  {
    title: "Video Resume",
    desc: "This video shows my skills, experience, creativity, and passion for professional growth.",
    file: vres,
    color: "bg-teal-50 hover:bg-teal-100",
    iconColor: "text-teal-600",
    icon: "video",
  },
  {
    title: "Tree",
    desc: "This tree represents my values, growth, confidence, and personal boundaries.",
    file: tree,
    color: "bg-rose-50 hover:bg-rose-100",
    iconColor: "text-rose-600",
    icon: "image",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 px-6 sm:px-12 bg-white scroll-mt-10"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-teal-700 font-medium tracking-wide uppercase text-sm mb-4">
            English Portfolio & Reflections
          </h3>
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] text-stone-900 mb-4">
            My Coursework
          </h2>
          <div className="w-16 h-1 bg-stone-200 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-12 grid sm:grid-cols-2 gap-6">
            {coursework.map((item, index) => (
              <motion.a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group block p-8 rounded-3xl transition-all duration-300 ${item.color}`}
              >
                <div
                  className={`p-3 bg-white rounded-xl inline-block shadow-sm mb-6 ${item.iconColor}`}
                >
                  {item.icon === "file" && <FileText className="w-6 h-6" />}
                  {item.icon === "image" && <Image className="w-6 h-6" />}
                  {item.icon === "video" && <Video className="w-6 h-6" />}
                </div>
                <h4 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-stone-700">
                  {item.title}
                </h4>
                <p className="text-stone-600 font-light text-sm mb-6 line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-stone-900">
                  Read document{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
