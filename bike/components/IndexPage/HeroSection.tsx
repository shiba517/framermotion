import React from 'react';
import { THeroSectionProps } from '@/app/_lib/types';
// import MotionDiv from '../MotionFramer/MotionDiv';
import { MotionP, MotionDiv } from '../MotionFramer/MotionFramerHTMLTags';

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}

const HeroSection = (params: THeroSectionProps) => {
  return (
    <MotionDiv>
      <MotionP
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1,
        ease: 'easeInOut',
        duration: 1.5
      }}
      viewport={{amount: 0}}
      className='text-xl uppercase p-4 bg-pink-200'>{params.title}</MotionP>
      <p className='text-sm p-4 bg-pink-500'>{params.subtitle}</p>
    </MotionDiv>
  );
}

export default HeroSection;
