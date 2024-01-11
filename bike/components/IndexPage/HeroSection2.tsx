"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const containerVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    backgroundColor: '#ff2994',
    transition: {
      duration: 2,
    }
  },
}

const nextVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 1,
    transition: {
      duration: 4,
    }
  },
}

const orchestratedVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    backgroundColor: 'green',
    transition: {
      type: 'spring',
      duration: 4,
      mass: 0.4,
      damping: 6,
      // when: 'beforeChildren'
      // beforeChildren: true
      staggerChildren: 0.5
    }
  },
}

const childVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    backgroundColor: 'blue',
    transition: {
      duration: 2,
    }
  },
}

const keyFramesVariants = {
  animate: {
   
  },
  hover: {
    scale: 1.1,
    transition: {
      repeat: 3,
      duration: 0.3
    }
  }
}

const backDropVariant = {
  initial: { opacity: 1 },
  animate: { opacity: 0 }
}

const HeroSection2 = ({setShowModal}: any) => {
  const [showTitle, setShowTitle] = useState(false)
  // const [showModal, setShowModal] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true)
  //   }, 1000)
  // }, [setShowModal])

  return (
    <div className="bg-pink-400 text-center">
      <motion.div
      className="bg-orange-200 p-4 w-fit mx-auto rounded-full"
      onClick={() => setShowModal(true)}
    >
      <p>modal</p>
    </motion.div>
    
    <motion.div
      className="bg-yellow-600 p-4 w-fit mx-auto"
      animate={{fontSize: 110, x: 100, y: 100, backgroundColor: '#ff2994'}}
      >
        <motion.h2>Pedal Pulse</motion.h2>
      </motion.div>
      { showTitle && (
        <motion.div
        className="bg-purple-800 p-4 w-fit mx-auto"
        >
          <p>animate off</p>
        </motion.div>
        ) }

    
      

      <motion.div
      className="bg-yellow-400 p-4 w-fit mx-auto"
      variants={keyFramesVariants}
      initial='initial'
      animate='animate'
      whileHover='hover'
      >
        <p>key frames</p>
      </motion.div>

      <motion.div
      className="bg-blue-400 p-4 w-fit mx-auto"
      variants={containerVariants}
      initial='initial'
      animate='animate'
      >
        <p>variants!</p>
      </motion.div>

      <motion.div
      className="bg-purple-400 p-4 w-fit mx-auto"
      variants={orchestratedVariants}
      initial='hidden'
      animate='visible'
      >
        <motion.p 
        variants={childVariants}
        initial='initial'
        animate='animate'
        >NEXT 1</motion.p>
        <motion.p 
        variants={childVariants}
        initial='initial'
        animate='animate'
        >NEXT 1</motion.p>
      </motion.div>

      <motion.div
      className="bg-green-600 p-4 w-fit mx-auto"
      animate={{marginTop: 40, opacity: 0.5}}
      >
        <p>Every Revolution Sets Your Adventure in Motion!</p>
      </motion.div>

      <motion.div
      className="bg-red-600 p-4 w-fit mx-auto"
      whileHover={{scale: 1.3, originX: 0, color: 'yellow'}}
      >
        <p>Every Revolution Sets Your Adventure in Motion!</p>
      </motion.div>

      <motion.div
      className="bg-orange-600 p-4 w-fit mx-auto rounded-lg"
      animate={{rotateZ: 180}}
      >
        <button>learn more</button>
      </motion.div>

      <motion.div
      className="bg-purple-600 p-4 w-fit mx-auto rounded-lg"
      animate={{}}
      transition={{type: 'spring', stiffness: 500}}
      whileHover={{scale: 1.2, boxShadow: '0px 0px 8px rgb(255, 255, 255'}}
      >
        <button>Greetings</button>
      </motion.div>
      
      <motion.div
      className="bg-blue-600 p-4 w-fit mx-auto rounded-2xl"
      initial={{x: '-100vw', y: '-100vh'}}
      animate={{
        x: 0, y: 0
      }}
      transition={{delay: 1, duration: 1.5, type: 'spring', stiffness: 50}}
      >
        <p>another test</p>
      </motion.div>
    </div>
  );
}

export default HeroSection2;
