import { useState } from "react";
import IndexTitle from "../IndexTitle";
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from "next/image";
import defaultImage from '@/public/images/default.jpg'
import defaultImageData from '@/json/defaultImages.json'
import TeamCard from "./TeamCard";

const galleryData = defaultImageData

const TeamSection = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [dataIndex, setDataIndex] = useState(0)

  function handleFlip () {
    if(!isAnimating) {
      setIsFlipped(!isFlipped)
      setIsAnimating(true)
    }
  }

  function updateDataIndex (position: any) {
    setDataIndex(position)
  }

  return (
    <div className='bg-blue-950 text-slate-300 h-fit text-center pb-10'>
      <IndexTitle title='our team'></IndexTitle>
      {/* <button className='p-4 bg-green-500 px-4 py-2'>more</button> */}

      <div className='px-10'>
        <div>position {dataIndex}</div>

        <div className='grid grid-cols-2 gap-2'>
          {galleryData.map((data, index) => {
            const srcUrl = '/images/default1.jpg'
            return (
              <div 
              className='my-flip-card aspect-square'
              onClick={() => {
                handleFlip()
              }}>
                <motion.div
                className="my-flip-card-inner w-full h-full"
                initial={false}
                animate={{rotateY: isFlipped ? 180 : 360}}
                transition={{duration: 0.6, animationDirection: "normal"}}
                onAnimationComplete={() => setIsAnimating(false)}
                >
                  <div className="my-flip-card-front bg-pink-800 h-full overflow-hidden">
                    <Image 
                    // src={defaultImage}
                    src={srcUrl}
                    width={1000}
                    height={1000}
                    alt="default image"
                    >
                    </Image>
                    <div className="p-2 bg-gray-700 absolute bottom-0 w-full">
                      <h3>{data.title}</h3>
                    </div>
                  </div>
                  <div className="my-flip-card-back bg-pink-800 w-full h-full"></div>
                </motion.div>
              </div>
            )
          })}
          <div 
          className='my-flip-card aspect-square'
          onClick={handleFlip}>
            <motion.div
            className="my-flip-card-inner w-full h-full"
            initial={false}
            animate={{rotateY: isFlipped ? 180 : 360}}
            transition={{duration: 0.6, animationDirection: "normal"}}
            onAnimationComplete={() => setIsAnimating(false)}>
              <div className="my-flip-card-front bg-green-800 w-full h-full">
                <Image 
                src={defaultImage}
                alt="default image"
                >
                </Image>
              </div>
              <div className="my-flip-card-back bg-pink-800 w-full h-full"></div>
            </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TeamSection;

// NOTES
// https://stackoverflow.com/questions/72532095/how-to-target-single-item-in-list-with-onclick-when-mapping-in-reactjs
