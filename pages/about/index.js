import React, { useState } from "react";
import Image from "next/image";

import Avatar from "../../components/Avatar";
import Cricles from "../../components/Circles";

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
          <Image key="html" src={html} width={350} height={350} className="h-350 w-350" alt="" />,
          <Image key="css"  src={css} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="js" src={js} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="ts" src={ts} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="git" src={git} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="github" src={github} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="graphql" src={graphql} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="next.js" src={nextjs} width={350} height={350} alt="" className="h-350 w-350" />,
          


        ],
      },
      {
        icons: [
          <Image key="postgresql" src={postgresql} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="python" src={python} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="react" src={react} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="tailwind" src={tailwindcss} width={350} height={350} alt="" className="h-350 w-350" />,
          <Image key="figma" src={figma} width={250} height={250} alt="" className="h-250 w-250" />,
          <Image key="sanity" src={sanity} width={350} height={350} alt="" className="h-350 w-350" />,


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
      {
        title: 'Web Development -MITI',
        stage: '2023',
      },
      {
        title: 'Matric - KCS School',
        stage: '2023',
      },
      {
        title: 'Learning A.I Meta Verse Web3.0 At - PIAIC',
        stage: '2023',
      },
    ],
  },
];




const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className=" h-full bg-primary/30 py-32 text-center xl:text-left">
      <Cricles />
      {/* avatar */}
      <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate='show' transition={{ duration: 1, ease: 'easeInOut' }}
        exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[370px]"><Avatar /></motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <motion.div className="flex-1 flex-col justify-center" variants={fadeIn('down', 0.5)} initial="hidden" animate='show' transition={{ duration: 1, ease: 'easeInOut' }}
          exit='hidden'>
          <h2 className="text-3xl pt-6  xl:mx-0 mb-4 xl:mb-3 px-2 xl:px-0">
            M.Hasan Baig:<span className="text-accent"> Crafting Digital</span> Dreams with the Alchemy of Next.js and Tailwind Mastery. 🚀✨</h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-4 px-2 xl:px-0">
            Hasan, a dynamic full-stack web developer, excels in Next.js and Tailwind CSS, crafting unparalleled user experiences. His mastery spans frontend to backend, creating responsive and visually stunning applications. Committed to pushing boundaries, Hasan stays ahead in the evolving digital landscape.</p>
          {/* counter */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-l gap-x-6 ">
              {/* experince */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after: right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent md-2">
                  <CountUp start={0} end={1} />+
                </div>
                <div className="text-lg uppercase tracking-[1px leading-[1.4] max-w-[100px]">Years of Experience</div>
              </div>
              {/* Project */}
              <div className="relative ml-4 flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after: right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent md-2">
                  <CountUp start={0} end={20} duration={2} />+
                </div>
                <div className="text-sm uppercase tracking-[1px leading-[1.4] max-w-[100px]"> Web Development Project</div>
              </div>
              {/* all project */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after: right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent md-2">
                  <CountUp start={0} end={13} duration={2} />+
                </div>
                <div className="text-lg uppercase tracking-[1px leading-[1.4] max-w-[100px]">TypeScript Project</div>
              </div>
              {/* Award */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after: right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent md-2">
                  <CountUp start={0} end={1} />
                </div>
                <div className="text-lg uppercase tracking-[1px leading-[1.4] max-w-[100px]">Wining Awards</div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* info */}
        {/* about */}
        <motion.div className="flex-col w-full xl:max-w-[48%] h-[480px] flex xl:flex" variants={fadeIn('left',0.5)} initial="hidden" animate='show'transition={{duration:1, ease:'easeInOut'}} exit='hidden'>
          <div className="flex gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && "text-accent after:w-[100%] text-sm after:bg-accent after:transition-all after:duration-300"} 
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className="flex flex-1 flex-col md:flex-row text-[15px] xl:text-lg max-w-max gap-x-2 items-center text-white/60">
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4  ">
                    {/* icon */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex}>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  )
};

export default About;
