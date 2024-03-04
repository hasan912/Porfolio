import Link from 'next/link';
const workSlides = {
  slides: [
    {
      images: [
        {
          path: '/ATM.jpg',
          Link: 'https://github.com/hasan912/ATM'
        },
        {
         Link:'https://github.com/hasan912/Console-Interactive-Banking-System',
          path: '/BankManagment.jpg',
        },
        {
         Link:'https://github.com/hasan912/calculator', 
          path: '/Calculator.jpg',
        },
        {
          Link:'',
          path: '/ConsoleInteractive.jpg',
        },
      ],
    },
    {
      images: [
        {
          Link:'https://hasan-creator.vercel.app/',
           path: '/Portfolio.jpg',
         },
        {
         Link:'https://github.com/hasan912/currencey-convertor', 
          path: '/CurrencyConverter.jpg',
        },
        {
          Link:'https://github.com/hasan912/number-Guses',
          path: '/Dice.jpg',
        },
        {
         Link:'https://github.com/hasan912/Chatter-Box',
          path: '/OOPs.jpg',
        },
      ],
    },
    {
      images: [
        {
          Link:'https://github.com/hasan912/Quiz-Engage-Hub',
          path: '/Quiz.jpg',
        },
        {
         Link:'https://github.com/hasan912/Education-System-Manager',
          path: '/StudentManagmentSystem.jpg',
        },
        {
          Link:'https://github.com/hasan912/Task-Control-Center',
          path: '/Todo.jpg',
        },
        {
     Link:'https://github.com/hasan912/Interactive-Countdown',
          path: '/Timmer.jpg',
        },
      ],
    },
    {
      images: [
        {
          Link:'https://github.com/hasan912/Word-Counter',
          path: '/WordGame.jpg',
        },
        {
      Link:'https://github.com/hasan912/Arena-Fuel-Challenge',
          path: '/Game.jpg',
        },     
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Image from 'next/image';

// import required modules
import { Pagination } from 'swiper';

//icon 
import { BsArrowRight } from "react-icons/bs"
// data

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className='h-[280px] sm:h-[480px]'>
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid h-full xl:grid-cols-2 grid-cols-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <a href={image.Link} target='_blank'>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      {/* Image */}
                      <Image src={image.path} width={350} height={250} className='w-[350px] h-[250px] '  alt='' />
                      {/* over;ay gradiant */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1*/}
                          <div className='delay-100'>View</div>
                           {/* title part 2*/}
                           <div className='translate-y-[500%] group-hover:translate-y-0 duration-300 delay-150'>Project</div>
                            {/* Icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                )
              })}
            </div>

          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
