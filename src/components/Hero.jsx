import profilePic from "../assets/Profile.png"
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36 ">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2 py-32">
            <div className="flex justify-center lg:p-8">
                <motion.img 
                src={profilePic} 
                alt="Ravi Kumar" 
                className="border border-stone-900 rounded-3xl"
                width={650}
                height={650}
                initial={{ x: 100, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ duration: 1, delay: 1.5 }}
                />
            </div>
        </div>
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2 variants={childVariants} id="hero" className="pb-2 text-4xl tracking-tighter lg:text-8xl py-32">Harshith Kirthi</motion.h2>
                <motion.span variants={childVariants} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Software Developer</motion.span>
                <motion.p variants={childVariants} className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
                <motion.div variants={childVariants}>
                <a href="https://drive.google.com/file/d/1-e0RthMDxQAJMUi8Z1qaHIcYtp_sRkQk/view" target="_blank" rel="nooppender noreferrer"
                className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
                    Check Resume
                </a>
                <br></br>
                <a href="https://github.com/Harshith-kirthi" className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
                    GitHub Profile
                </a>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero