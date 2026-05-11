import { ArrowUpRight, FileText, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section className="py-28 px-6 sm:px-12 bg-stone-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-['Playfair_Display',serif] text-stone-900 mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-stone-600 text-lg mb-16 font-light max-w-xl mx-auto"
        >
          I'm always open to discussing psychology, new opportunities, and ways
          we can collaborate to support mental well-being.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          <motion.a
            href="mailto:Christina.khachan1@hotmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="flex flex-col items-center gap-3 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="p-4 bg-teal-50 text-teal-600 rounded-full group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-stone-900">Email</h3>
            <p className="text-stone-500 font-light text-sm">
              Christina.khachan1@hotmail.com
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="flex flex-col items-center gap-3 p-8 bg-white rounded-3xl shadow-sm transition-all"
          >
            <div className="p-4 bg-orange-50 text-orange-600 rounded-full">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-stone-900">Phone</h3>
            <p className="text-stone-500 font-light text-sm">+961 81 276 712</p>
          </motion.div>

          <motion.a
            href="/Christina_Khachan_CV.pdf"
            download="Christina_Khachan_CV.pdf"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="flex flex-col items-center gap-3 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
          >
            <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-stone-300 group-hover:text-stone-900 transition-colors" />

            <div className="p-4 bg-stone-100 text-stone-700 rounded-full group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="font-medium text-stone-900">CV</h3>
            <p className="text-stone-500 font-light text-sm">Download my CV</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/christina-khachan-3a28273a5"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="flex flex-col items-center gap-3 p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
          >
            <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-stone-300 group-hover:text-stone-900 transition-colors" />
            <div className="p-4 bg-stone-100 text-stone-700 rounded-full group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
            <h3 className="font-medium text-stone-900">LinkedIn</h3>
            <p className="text-stone-500 font-light text-sm">Connect with me</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-stone-200"
        >
          <p className="text-stone-400 text-sm font-light">
            © {new Date().getFullYear()} Christina Khachan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
