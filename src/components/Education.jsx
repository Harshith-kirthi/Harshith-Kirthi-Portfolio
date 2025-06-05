import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2 
      whileInView={{ opacity: 1, y:0}}
      initial={{ opacity: 0, y:-100}}
      transition={{ duration: 0.5}}
      id="education" className="my-20 text-center text-4xl pt-32">Education</motion.h2>
      <div>
        {EDUCATION.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Year */}
            <motion.div 
            whileInView={{ opacity: 1, x:0}}
            initial={{ opacity: 0, x:-100}}
            transition={{ duration: 0.5}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
            </motion.div>

            {/* Experience Details */}
            <motion.div 
            whileInView={{ opacity: 1, x:0}}
            initial={{ opacity: 0, x:100}}
            transition={{ duration: 0.5}}
            className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">
                {experience.role}{" "}<br></br>
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>

              {/* Description */}
              <p className="mb-4 text-stone-400">{experience.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
