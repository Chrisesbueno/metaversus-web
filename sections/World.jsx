'use client';

import {motion} from 'framer-motion'
import styles from '../styles'
import {staggerContainer, fadeIn} from '../utils/motion'
import { TitleText, TypingText } from '../components';


const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
    variants={staggerContainer}
    initial='hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
  >
    <TypingText title='| People on the World' textStyles='text-center'/>
    <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles='text-center' />

    <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className='relative mt-[68px] flex w-full '
    >
      <img src="map.png" alt="map" className='w-full h-full object-cover' />

      <div className="absolute bottom-[20%] right-[10%] lg:w-[70px] lg:h-[70px] w-[30px] h-[30px] lg:p-[6px] p-[3px] rounded-full bg-[#5d6680] cursor-pointer transition-all ease-in duration-300 lg:hover:w-[75px] lg:hover:h-[75px] hover:w-[35px] hover:h-[35px]">
        <img src="people-01.png" alt="people"
        className='relative w-full h-full z-10' />
        <div className="relative -top-12 w-full h-full bg-[#FF8000] blur-xl z-0"></div>
      </div>

      
      <div className="absolute top-[10%] left-[10%] lg:w-[70px] lg:h-[70px] w-[30px] h-[30px] lg:p-[6px] p-[3px] rounded-full bg-[#5d6680]  cursor-pointer transition-all ease-in duration-300 lg:hover:w-[75px] lg:hover:h-[75px] hover:w-[35px] hover:h-[35px]">
        <img src="people-02.png" alt="people"
        className='relative w-full h-full z-10' />
        <div className="relative -top-12 w-full h-full bg-[#e30052] blur-xl z-0"></div>
      </div>


      <div className="absolute top-[40%] left-[45%] lg:w-[70px] lg:h-[70px] w-[30px] h-[30px] lg:p-[6px] p-[3px] rounded-full bg-[#5d6680]  cursor-pointer transition-all ease-in duration-300 lg:hover:w-[75px] lg:hover:h-[75px] hover:w-[35px] hover:h-[35px]">
        <img src="people-03.png" alt="people"
        className='relative w-full h-full z-10' />
        <div className="relative -top-12 w-full h-full bg-[#FFFFFF] blur-xl z-0"></div>
      </div>

      <div className="lg:block hidden absolute bottom-[20%] left-[15%] w-[211px] h-[159px] p-[6px] rounded-lg bg-[#5d6680] cursor-pointer transition-all ease-in duration-300 hover:w-[215px] hover:h-[165px]">
        <img src="world-01.png" alt="world"
        className='relative w-full h-full z-10' />
        <div className="relative z-10 flex flex-col -top-[40%] left-[7.5%]">
          <div className="flex justifiy-between gap-2 items-center">
            <img src="people.png" alt="people" />
            <p className="font-normal text-[12px] text-white">+ 264 has joined</p>
          </div>
          <h1 className="font-bold text-[18px] text-white">The Upside Down</h1>
        </div>
        <div className="relative -top-[125%] w-full h-full bg-[#b65eab] blur-2xl z-0"></div>
      </div>


      <div className="lg:block hidden absolute top-[10%] right-[20%] w-[211px] h-[159px] p-[6px] rounded-lg bg-[#5d6680] cursor-pointer transition-all ease-in duration-300 hover:w-[215px] hover:h-[165px]">
        <img src="world-02.png" alt="world"
        className='relative w-full h-full z-10' />
        <div className="relative z-10 flex flex-col -top-[40%] left-[7.5%]">
          <div className="flex justifiy-between gap-2 items-center">
            <img src="/people.png" alt="people" />
            <p className="font-normal text-[12px] text-white">+ 264 has joined</p>
          </div>
          <h1 className="font-bold text-[18px] text-white">Hawkins Labs</h1>
        </div>
        <div className="relative -top-[125%] w-full h-full bg-[#3e2a85] blur-2xl z-0"></div>
      </div>

    </motion.div>
  </motion.div>
  </section>
);

export default World;
