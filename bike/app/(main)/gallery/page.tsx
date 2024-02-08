"use client"

import MFAnimatePresence from '@/components/MotionFramer/MFAnimatePresence';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const v1 = {
  hidden: {opacity: 1, y: 0},
  visible: {opacity: 0, y: 0,}
}

const v2 = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: '50vw',
    transition: {
      duration: 2
    }
  }
}


const page = (props: any) => {

  return (
    <div className='min-h min-h-fit bg-blue-600 relative w-full overflow-hidden'>
      {/* <MFAnimatePresence>
        <p>gallery content</p>
      </MFAnimatePresence> */}

      <motion.div 
      className=' bg-green-500 h-[110vh] mx-auto'
      variants={v1} 
      initial="hidden"
      animate="visible"
      transition={{duration: 0.5}}
      whileInView={{
        opacity: 1,
        transition: {
            duration: 1.5
        }
    }}
    // viewport={{ once: true }}
      ></motion.div>
      <motion.div 
      className=' bg-yellow-400 h-[110vh] mx-auto'
      variants={v1} 
      initial="hidden"
      animate="visible"
      transition={{duration: 0.5}}
      whileInView={{
        opacity: 1,
        transition: {
            duration: 1.5
        }
      }}
    // viewport={{ once: true }}
      >
        <motion.p
        className='uppercase font-extrabold text-4xl'
        initial={{x: '-100%'}}
        whileInView={{
          x: '0',
          transition: {
              duration: 2
          }
        }}
        >viewing</motion.p>
      </motion.div>

    </div>
  );
}

export default page;

