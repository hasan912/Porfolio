import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full relative overflow-hidden">
      {/* text section */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto px-4 sm:px-6 lg:px-8">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md pt-10 md:max-w-2xl mx-auto xl:mx-0 mb-8 md:mb-12 xl:mb-16 text-sm md:text-base lg:text-lg"
          >
            Elevating Web Development Excellence with Next.js and Tailwind CSS
            Mastery - A Full Stack Maestro Crafting Dynamic, Performant, and
            Aesthetically Pleasing Digital Experiences for the Modern Era.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex mb-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image & particles */}
      <div className="absolute inset-0 flex items-end justify-center xl:justify-end">
        {/* bg img */}
        <div className="hidden xl:block bg-explosion bg-cover bg-right bg-no-repeat w-full h-full absolute mix-blend-color-dodge" />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          transition={{ duration: 1, ease: "easeInOut" }}
          exit="hidden"
          className="relative w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] 2xl:w-[737px] mx-auto xl:mx-0"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
