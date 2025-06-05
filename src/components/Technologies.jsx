import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";

const iconVariants = (duration) => ({
  initial: { y: -10},
  animate: {
    y: [10, -10],transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
      whileInView={{ opacity: 1, y:0}}
      initial={{ opacity: 0, y:-100}}
      transition={{ duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{ opacity: 1, x:0}}
      initial={{ opacity: 0, x:-100}}
      transition={{ duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        initial="initial"
        animate="animate"
        variants={iconVariants(2.5)}>
          <FaPython className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(5)} className="p-4">
          <FaJava className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(3)} className="p-4">
          <DiDjango className="text-7xl" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(5.5)}>
          <GrMysql className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(3.5)}>
          <FaDocker className="text-7xl text-blue-900" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(6)}>
          <FaJenkins className="text-7xl text-red-400" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(4)}>
          <AiOutlineKubernetes className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(6.5)} className="bg-white p-2 rounded">
          <FaAws className="text-7xl text-black" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(4.5)}>
          <FaHtml5 className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(7)}>
          <FaCss3Alt className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(5)}>
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(7.5)}>
          <FaReact className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(5.5)} className="bg-white p-2 rounded">
          <RiNextjsFill className="text-7xl text-black" />
        </motion.div>
        <motion.div initial="initial"
        animate="animate"
        variants={iconVariants(8)} className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;