import React from 'react';
import IndexTitle from '../IndexTitle';
import AboutCard from './AboutCard';
import aboutJson from '@/json/about.json'
import { motion, useAnimation, useInView } from 'framer-motion';

const aboutData = aboutJson

const v1 = {
  hidden: {opacity: 1, y: 0},
  visible: {opacity: 0, y: 0,}
}

const v2 = {
  // hidden: {opacity: 1, y: 0},
  initial: {x: '-100vw'}
}

const AboutSection = () => {
  return (
    <motion.div 
    className='bg-purple-950 text-slate-300 text-center px-10 min-h-screen pb-10'
    variants={v1} 
    initial="hidden"
    animate="visible"
    // transition={{duration: 0.5}}
    whileInView={{
      opacity: 1,
      transition: {
          duration: 1
      }
    }}
    // viewport={{ once: true }}
    >
      <IndexTitle title='About us'></IndexTitle>

      <div className='grid grid-cols-2 gap-4 h-fit'>
        {aboutData.map((data: any, index) => {
          return (
            <motion.div
            variants={v2} 
            initial={{x: '-100vw'}}
            // initial={{x: -200}}
            // initial='initial'
            whileInView={{
              x: '0',
              transition: {
                  duration: 1,
                  delay: index / 3,
                  type: 'spring', 
                  stiffness: 50
              }
            }}
            >
              <AboutCard 
              title={data.title} 
              content={data.content} 
              faIcon={data.faIcon}>
              </AboutCard>
            </motion.div>
            
          )
        })}
        
      </div>
    </motion.div>
  );
}

export default AboutSection;
