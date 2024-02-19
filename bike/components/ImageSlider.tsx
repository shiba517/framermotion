import React, { useState } from 'react'
import { motion } from 'framer-motion';
import defaultImageData from '@/json/defaultImages.json'
import ShadCarousel from './ShadComponents/ShadCarousel';

const ImageSlider = () => {
    const [indexPosition, setIndexPosition] = useState(1)

    const galleryData = defaultImageData
    return (
        <div className='p-10 bg-green-950'>
            <div className='bg-yellow-400 p-4'>
                <ShadCarousel></ShadCarousel>
            </div>

            <div className='bg-blue-500'>
            {galleryData.map((data, index) => {
                return (
                    <div 
                    className={`flex flex-row w-fit px-2 py-1 ${indexPosition === index ? 'bg-green-200' : 'bg-pink-700'}`}
                    onClick={() => setIndexPosition(index)}>
                        {index}
                    </div>
                )
            })}
            </div>

            <div className=' bg-blue-900'>
                <button onClick={() => alert('prev')}>prev</button>
                <button onClick={() => alert('next')}>next</button>
            </div>
        </div>
    )
}

export default ImageSlider;

// npm i shadcn-ui@latest add carousel