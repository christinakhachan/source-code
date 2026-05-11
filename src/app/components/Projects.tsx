import { ArrowRight, FileText, Image, Video } from "lucide-react";
import { motion } from "motion/react";

// Import PDFs
import depthPerc from "../../imports/christina_khachan_depth_perception__copy.pdf";
import gambling from "../../imports/gambling_project.pdf";
import psl201Chap9 from "../../imports/psl_201_ref_chap_9.pdf";
import refPsl211 from "../../imports/ref_psl_211_copy.pdf";
import ref56 from "../../imports/reflection_5_6_211_copy.pdf";
import ref67 from "../../imports/reflection_paper_6-7__assignment__copy.pdf";
import sensAndPerc from "../../imports/sens_and_perc_paper_copy.pdf";
import sleepAddiction from "../../imports/Sleep_Addiction_paper.pdf";
import socialExpVid from "../../imports/Social_experiment-_Christina_Khachan.mp4";
import socialExp from "../../imports/Social_experiment-_Christina_Khachan_copy.pdf";

const projects = [
  {
    title: "Sensation & Perception",
    desc: "An academic paper exploring how sensory systems process information and influence our perception of the world.",
    file: sensAndPerc,
    color: "bg-emerald-50 hover:bg-emerald-100",
    iconColor: "text-emerald-600",
    icon: "file",
  },
  {
    title: "Depth Perception Study",
    desc: "An in-depth psychological study focusing on visual depth perception and its underlying cognitive mechanisms.",
    file: depthPerc,
    color: "bg-indigo-50 hover:bg-indigo-100",
    iconColor: "text-indigo-600",
    icon: "file",
  },
  {
    title: "Sleep Addiction Analysis",
    desc: "A research paper delving into the psychological and physiological aspects of sleep and addictive behaviors.",
    file: sleepAddiction,
    color: "bg-blue-50 hover:bg-blue-100",
    iconColor: "text-blue-600",
    icon: "file",
  },
  {
    title: "Social Experiment Presentation",
    desc: "Documentation and analysis of a social psychology experiment, observing behavioral responses in group settings.",
    file: socialExp,
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
    icon: "file",
  },
  {
    title: "Social Experiment Video",
    desc: "Documentation and analysis of a social psychology experiment, observing behavioral responses in group settings.",
    file: socialExpVid,
    color: "bg-orange-50 hover:bg-orange-100",
    iconColor: "text-orange-600",
    icon: "video",
  },
  {
    title: "Gambling Behavior Project",
    desc: "A comprehensive project investigating the psychological triggers and behavioral patterns associated with gambling.",
    file: gambling,
    color: "bg-rose-50 hover:bg-rose-100",
    iconColor: "text-rose-600",
    icon: "file",
  },
  {
    title: "Child Reflection 1",
    desc: "A comprehensive reflection on the core learnings and psychological theories covered throughout the PSL 211 course.",
    file: refPsl211,
    color: "bg-teal-50 hover:bg-teal-100",
    iconColor: "text-teal-600",
    icon: "file",
  },
  {
    title: "Child Reflection 2",
    desc: "An academic reflection covering the cognitive and behavioral theories presented in chapters 5 and 6.",
    file: ref56,
    color: "bg-purple-50 hover:bg-purple-100",
    iconColor: "text-purple-600",
    icon: "file",
  },
  {
    title: "Learning Reflection",
    desc: "A detailed reflective assignment exploring and applying psychological topics from chapters 6 and 7.",
    file: ref67,
    color: "bg-cyan-50 hover:bg-cyan-100",
    iconColor: "text-cyan-600",
    icon: "file",
  },
  {
    title: "Psychology Reflection",
    desc: "A reflection paper analyzing key concepts, methodologies, and findings from Chapter 9 of PSL 201.",
    file: psl201Chap9,
    color: "bg-amber-50 hover:bg-amber-100",
    iconColor: "text-amber-600",
    icon: "file",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 sm:px-12 bg-stone-50 scroll-mt-10 relative overflow-hidden"
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
            Academic & Research Work
          </h3>
          <h2 className="text-4xl sm:text-5xl font-['Playfair_Display',serif] text-stone-900 mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-stone-200 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <motion.a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.015 }}
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
    </section>
  );
}
