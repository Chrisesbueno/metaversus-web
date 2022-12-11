'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col justify-between"
  >
    <img src={imgUrl} alt="planet" className="md:w-[270px] w-full md:h-[250px] h-[130px] object-cover md:rounded-[32px] rounded-[18px]" />
    <div className="w-full flex justify-between items-center gap-[70px]">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[32px] md:text-[26px] text-[18px] text-white">{title}</h4>
        <p className="mt-[5px] lg:mt-[16px] font-normal lg:text-[20px] md:text-[14px] text-[12px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[80px] h-[80px] rounded-full bg-transparent border-[1px] border-white">
        <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
