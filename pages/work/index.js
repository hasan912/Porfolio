//component
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Cricles from '../../components/Circles'
import ParticlesContainer from "../../components/ParticlesContainer"
//Farmer
import {motion} from 'framer-motion'
import { FadeIn, fadeIn } from '../../variants'


const Work = () => {
  return( <div className="h-full bg-primary/30 py-36 flex items-center">
          <ParticlesContainer />
          <Cricles/>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-6">
            {/* text */}
            <div className="text-center flex xl:w-[500px] flex-col lg:text-left mb-4 xl:mb-0">
                <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate='show' exit='hidden' className="h2 xl:mt-12"> My Work <span className="text-accent">.</span></motion.h2>
                <motion.p variants={fadeIn('up', 0.4)} initial="hidden" animate='show' exit='hidden' className="mb-4 max-w-[500px] mx-auto lg:mx-0">I specialize in UI design, full-stack web development using Next.js and Node.js, creating interactive quiz apps, efficient styling with Tailwind CSS, and seamless database integration for applications. Additionally, I excel in developing e-commerce platforms with dynamic product showcases, payment gateway integration, and robust user authentication.</motion.p>
            </div>
            {/* Slider */}
            <motion.div  variants={fadeIn('up', 0.6)} initial="hidden" animate='show' exit='hidden' className='w-full xl:max-w-[60%] '>
            <WorkSlider/>
            </motion.div>
            
          </div>
        </div>
        
        <Bulb/>
  </div>
)};

export default Work;

