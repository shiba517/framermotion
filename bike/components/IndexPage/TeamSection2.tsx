import React, { useRef, useState } from 'react'
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from 'next/image'
import teamJson from '@/json/team.json'

const loremIpsum = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti dolorem vel unde, illum, totam recusandae ad in dolorum dicta laboriosam explicabo fugiat error blanditiis doloribus voluptatem quam fugit possimus?'

const teamData = teamJson

const v2 = {
    initial: {x: '-100vw'}
}



const TeamSection2 = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 1.5]);  // [position, scale]


    return (
        <div className='my-bg bg-slate-800 relative overflow-x-hidden'>
            <motion.div
            className='w-1/2 absolute mx-auto text-slate-100 bottom-[50%] left-[20%] h-fit'
            style={{ scale }}>
                    <div className='absolute bottom-[50%] font-semibold'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti dolorem vel unde, illum, <strong className='text-yellow-500'>totam recusandae</strong> ad in dolorum dicta laboriosam explicabo fugiat error blanditiis doloribus <strong className='text-yellow-500'>voluptatem quam fugit</strong> possimus?</p>
                    </div>
                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}/>
                    
            </motion.div>
            <div className='absolute bottom-0 w-full pb-9 px-6'>
                {teamData.map((data, index) => {
                    return (
                        <motion.div 
                        className='w-full py-1'
                        variants={v2} 
                        initial={{x: '90vw'}}
                        whileInView={{
                            x: '0',
                            transition: {
                                duration: 1.5,
                                delay: 0 + (index / 2),
                                type: 'spring', 
                                stiffness: 50
                            }
                          }}>
                            <div className='flex flex-row'>
                                <div className='w-fit'>
                                    <div className='rounded-full overflow-hidden w-28 h-28'>
                                    <Image
                                    className=''
                                    src={"/images/" + data.imageFileName}
                                    width={1000}
                                    height={1000}
                                    alt='default image'></Image>
                                    </div>
                                </div>
                                <div className='w-3/5 px-4'>
                                    <p className='text-3xl uppercase font-bold text-yellow-500'>{data.title}</p>
                                    <p className='text-xl italic capitalize font-medium text-slate-100'>{data.position}</p>
                                </div>
                            </div>
                            
                        </motion.div>
                    )
                })}
                
            </div>
        </div>
        
    )
}

export default TeamSection2

{/* <div>
    <div className='rounded-full overflow-hidden h-28 w-28'>
    <div className='h-full'>
        <Image
        className=''
        src={"/images/staff_default2.jpg"}
        width={1000}
        height={1000}
        alt='default image'></Image>
    </div>
    </div>
    <div className='text-white mx-4'>
        <p className='text-3xl uppercase font-bold text-yellow-500'>staff name</p>
        <p className='text-xl italic capitalize font-medium'>company position</p>
    </div>
</div> */}