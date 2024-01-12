import React from 'react';
import baseInfoJson from '@/json/baseInfo.json'
import { motion } from 'framer-motion';

const baseInfoData = baseInfoJson[0]

const headerVariant = {
    initial: {
        y: '-50vh',
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 4,
            duration: 1,
        }
    }
}

const subHeaderVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        rotateZ: 360,
        transition: {
            duration: 1,
            delay: 1
        }
    }
}

const buttonVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        // rotateZ: 360,
        transition: {
            duration: 1,
            delay: 2
        }
    },
    whileHover: {
        scale: 1.1, 
        boxShadow: '0px 0px 8px rgb(255, 255, 255'
    }
}

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
