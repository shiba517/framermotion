import React from 'react';
import HeroSection from './HeroSection';
import baseInfoJson from '@/json/baseInfo.json'
import { MotionDiv } from '../MotionFramer/MotionFramerHTMLTags';

const baseInfoData = baseInfoJson[0]

const variants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
}

const IndexPage = () => {
  return (
    <div>
      <MotionDiv
      variants={variants}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1,
        ease: 'easeInOut',
        duration: 1.5
      }}
      viewport={{amount: 0}}
      className='bg-green-400 p-4 rounded-md'
      >motion</MotionDiv>
      <HeroSection
      title={baseInfoData.title}
      subtitle={baseInfoData.subtitle}
      ></HeroSection>
    </div>
  );
}

export default IndexPage;
