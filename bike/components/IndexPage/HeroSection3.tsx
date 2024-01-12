import React from 'react';
import baseInfoJson from '@/json/baseInfo.json'
import { motion } from 'framer-motion';
import { heroHeaderVariant, heroSubHeaderVariant } from '@/app/_lib/framer-motion-variants'
import MFButton from '../MotionFramer/MFButton';

const baseInfoData = baseInfoJson[0]

const headerVariant = heroHeaderVariant
const subHeaderVariant = heroSubHeaderVariant

const HeroSection3 = () => {
  return (
    <motion.div className='bg-black text-white h-full flex flex-col items-center justify-center'>
        <motion.h2 
        className='uppercase font-extrabold text-5xl text-yellow-500'
        variants={headerVariant}
        initial='initial'
        animate='animate'
        >{ baseInfoData.title }</motion.h2>
        <motion.p 
        className='text-slate-300'
        variants={subHeaderVariant}
        initial='initial'
        animate='animate'
        >{ baseInfoData.subtitle }</motion.p>
        <motion.div 
        className='p-2'
        initial={{opacity: 0}}
        animate={{
            opacity: 1
        }}
        transition={{delay: 2}}
        ><MFButton></MFButton></motion.div>
    </motion.div>
  );
}

export default HeroSection3;
