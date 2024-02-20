import React from 'react'
import IndexTitle from '../IndexTitle'
import Image from 'next/image'
import articlesJson from '@/json/articles.json'
import { motion, useAnimation, useInView } from 'framer-motion';

const articlesData = articlesJson

const v1 = {
    hidden: {opacity: 1, y: 0},
    visible: {opacity: 0, y: 0,}
}

const ArticleSection = () => {
  return (
    <motion.div 
    className='px-10 pb-10 bg-slate-300'
    variants={v1} 
    initial="hidden"
    animate="visible"
    whileInView={{
      opacity: 1,
      transition: {
        duration: 2
      }
    }}>
        <IndexTitle title={"News and articles"}></IndexTitle>

        <div>
            <div className=''>
                <div>
                    <h3 className='uppercase text-lg font-bold'>Top stories</h3>
                    <div className='h-fit overflow-hidden pt-4'>
                        <motion.div 
                        className='relative aspect-square overflow-hidden over'
                        initial={{y: '100%'}}
                        whileInView={{
                            y: 0,
                            transition: {
                              duration: 1,
                              type: 'spring',
                              stiffness: 40
                            }
                        }}
                        >
                            <Image
                            className=''
                            src={"/images/default2.jpg"}
                            width={1000}
                            height={1000}
                            alt='default image'></Image>
                            <div className='bg-black absolute opacity-60 top-0 h-full w-full'>
                            </div>
                            <div className='absolute bottom-0 pb-10 text-center w-full text-slate-100'>
                                <h4 className='uppercase text-xs font-medium'>category</h4>
                                <h2 className='text-4xl capitalize py-2 font-semibold'>article title</h2>
                                <p className='uppercase text-xs font-medium'>by auther</p>
                            </div>
                        </motion.div>
                    </div>
                    

                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        {articlesData.map((data: any) => {
                            return (
                                <div className='h-fit pb-2'>
                                    <motion.div 
                                    className=''
                                    initial={{y: '100%'}}
                                    whileInView={{
                                        y: 0,
                                        transition: {
                                        duration: 1,
                                        type: 'spring',
                                        stiffness: 40
                                        }
                                    }}>
                                    <div className='aspect-video bg-black mb-1 overflow-hidden'>
                                    <Image
                                    src={"/images/" + data.imageFileName}
                                    width={1000}
                                    height={1000}
                                    alt='default image'></Image>
                                    </div>
                                    <h2 className='line-clamp-2 font-semibold pb-1'>{data.title}</h2>
                                    <p className='line-clamp-3 text-xs'>{data.content}</p>
                                    {/* <button className='py-1 text-xs px-2 border border-black'>reaed more</button> */}
                                </motion.div>
                                </div>
                                
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ArticleSection