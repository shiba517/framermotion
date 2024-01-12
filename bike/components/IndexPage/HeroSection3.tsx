import React from 'react';
import baseInfoJson from '@/json/baseInfo.json'
import { motion } from 'framer-motion';
import { heroHeaderVariant, heroSubHeaderVariant, uniButtonVariant } from '@/app/_lib/framer-motion-variants'

const baseInfoData = baseInfoJson[0]

const headerVariant = heroHeaderVariant
const subHeaderVariant = heroSubHeaderVariant
const buttonVariant = uniButtonVariant

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
        <div className='p-2'>
            <motion.button
            className='bg-purple-950 px-4 py-2'
            variants={buttonVariant}
        initial='initial'
        animate='animate'
        whileHover='whileHover'
            >button</motion.button>
        </div>
    </motion.div>
  );
}

export default HeroSection3;
