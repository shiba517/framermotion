import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import menuJson from '@/json/defaultImages.json'
import Image from 'next/image'
import IndexTitle from '../IndexTitle'
import { motion, useAnimation, useInView } from 'framer-motion';

const menuData = menuJson

const v1 = {
  hidden: {opacity: 0},
  // visible: {opacity: 1, y: 0,}
}

const ShadCarousel = () => {
  return (
    <div className='bg-green-600 px-10 pb-10 text-center'>  
      <IndexTitle title={"Gallery"}></IndexTitle>

      <motion.div 
      className='text-center w-fit mx-auto'
      variants={v1} 
      // initial="hidden"
      initial={{opacity: 0}}
      animate="visible"
      whileInView={{
        opacity: 1,
        rotate: 355,
        scale: 1,
        transition: {
          duration: 1,
          type: "spring",
          stiffness: 80,
          damping: 40,
        }
      }}>
        <Carousel
        opts={{
          align: "start",
        }}
        className="w-5/6 max-w-sm mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => 
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <div className='aspect-square overflow-hidden w-full bg-black inline-flex items-center justify-center'>
                    <Image
                    src={"/images/" + menuData[index].imageFileName}
                    width={1000}
                    height={1000}
                    alt='default image'></Image>
                  </div>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </div>
  )
}

export default ShadCarousel

// npm i shadcn-ui@latest init
// npm i shadcn-ui@latest add carousel

