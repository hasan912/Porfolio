import React, { useState } from "react";
import Image from "next/image";

import Avatar from "../../components/Avatar";
import Cricles from "../../components/Circles";
import ParticlesContainer from "../../components/ParticlesContainer"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import CountUp from "react-countup";

import html from '../../public/HTML.svg'
import css from '../../public/CSS.svg'
import js from '../../public/JS.svg'
import ts from '../../public/TS.svg'
import github from '../../public/GitHub.svg'
import git from '../../public/git.svg'
import graphql from '../../public/GraphQL.svg'
import nextjs from '../../public/NEXT.JS.svg'
import postgresql from '../../public/PostgreSQL.svg'
import python from '../../public/Python.svg'
import react from '../../public/React.svg'
import tailwindcss from '../../public/TailwindCSS.svg'
import figma from '../../public/Figma.svg'
import sanity from '../../public/Sanity.io.svg'

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
      },
      {
        icons: [
          <Image key="html" src={html} width={30} height={60} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="css" src={css} width={30} height={60} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="js" src={js} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="ts" src={ts} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="git" src={git} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="github" src={github} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="graphql" src={graphql} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="next.js" src={nextjs} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
        ],
      },
      {
        icons: [
          <Image key="postgresql" src={postgresql} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="python" src={python} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="react" src={react} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="tailwind" src={tailwindcss} width={30} className="xl:h-14 xl:w-14" height={30} alt="" />,
          <Image key="figma" src={figma} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
          <Image key="sanity" src={sanity} width={30} height={30} className="xl:h-14 xl:w-14" alt="" />,
        ],
      },
    ],
  },
  {
    title: 'About Me!',
    info: [
      {
        title:" Dedicated professional proficient in Next.js, React, Tailwind CSS, PostgreSQL, and TypeScript. Specializing in Next.js, I bring a unique blend of creativity and technical expertise, using tools like Figma. Well-versed in Postman and Git, I thrive on digital challenges, consistently pursuing improvement and eagerly contributing to innovative projects."
      }
    ],
  },
  {
    title: 'Skill Info',
    info: [
      {
        title: 'My transformative web development journey with MITI in 2023 is enhanced by PIAIC Meta Verse Web 3.0 program. Beyond coding, it explores Next.js to PostgreSQL, shaping my understanding of the metaverse. PIAIC is my guiding light into AI and innovation, as I craft the digital future with MITI foundation.',
      }
    ],
  },
  {
    title: 'credentials',
    info: [
      { title: 'Web Development -MITI', stage: '2023' },
      { title: 'Matric - KCS School', stage: '2023' },
      { title: 'Learning A.I Meta Verse Web3.0 At - PIAIC', stage: '2023' },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full xl:mt-10  py-20 text-center xl:text-left">
      <ParticlesContainer />
      <Cricles />
      {/* avatar */}
      <motion.div 
        variants={fadeIn('up', 0.5)} 
        initial="hidden" 
        animate="show" 
        transition={{ duration: 1, ease: 'easeInOut' }}
        exit="hidden" 
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container justify-center mx-auto h-full flex flex-col xl:flex-row items-center gap-x-8 px-4 xl:px-0">
        {/* text */}
        <motion.div 
          className="flex flex-col items-center xl:items-start w-full xl:max-w-[48%] h-auto xl:h-[480px] justify-center"
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          animate="show" 
          transition={{ duration: 1, ease: 'easeInOut' }}
          exit="hidden"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold pt-6 mb-4 text-center xl:text-left">
            M.Hasan Baig:
            <span className="text-accent"> Crafting Digital</span> Dreams with the Alchemy of Next.js and Tailwind Mastery. 🚀
          </h2>
          <p className="text-sm sm:text-base md:text-lg max-w-[500px] mx-auto xl:mx-0 mb-6 text-center xl:text-left">
            Hasan, a dynamic full-stack web developer, excels in Next.js and Tailwind CSS, crafting unparalleled user experiences. His mastery spans frontend to backend, creating responsive and visually stunning applications. Committed to pushing boundaries, Hasan stays ahead in the evolving digital landscape.
          </p>
          
          {/* counter */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-wrap gap-6 justify-center xl:justify-start">
              {/* Experience */}
              <div className="flex flex-col items-center xl:items-start">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={1} />+
                </div>
                <div className="text-sm xl:text-base uppercase tracking-wide max-w-[120px] text-center xl:text-left">Years of Experience</div>
              </div>
              {/* Projects */}
              <div className="flex flex-col items-center xl:items-start">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={20} duration={2} />+
                </div>
                <div className="text-sm xl:text-base uppercase tracking-wide max-w-[120px] text-center xl:text-left">Web Development Projects</div>
              </div>
              {/* TS Projects */}
              <div className="flex flex-col items-center xl:items-start">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={13} duration={2} />+
                </div>
                <div className="text-sm xl:text-base uppercase tracking-wide max-w-[120px] text-center xl:text-left">TypeScript Projects</div>
              </div>
              {/* Awards */}
              <div className="flex flex-col items-center xl:items-start">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={1} />
                </div>
                <div className="text-sm xl:text-base uppercase tracking-wide max-w-[120px] text-center xl:text-left">Winning Awards</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* info section */}
        <motion.div 
          className="flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px] flex"
          variants={fadeIn('left', 0.5)} 
          initial="hidden" 
          animate="show" 
          transition={{ duration: 1, ease: 'easeInOut' }} 
          exit="hidden"
        >
          {/* Tabs */}
          <div className="flex gap-x-6 justify-center xl:justify-start mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex 
                  ? "text-accent after:w-full after:bg-accent" 
                  : "after:w-8 after:bg-white"} cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-3 items-center xl:items-start text-center xl:text-left">
            {aboutData[index].info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex flex-col md:flex-row text-sm sm:text-base xl:text-lg max-w-[600px] gap-x-2 items-center xl:items-start text-white/70">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-3 flex-wrap justify-center xl:justify-start">
                  {item.icons?.map((icon, i) => (
                    <div key={i}>{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
};

export default About;
