"use client"

import HeroSection2 from '@/components/IndexPage/HeroSection2';
import HeroSection from '@/components/IndexPage/HeroSection';
import IndexPage from '@/components/IndexPage/IndexPage'
import MFAnimatePresence from '@/components/MotionFramer/MFAnimatePresence';
import FramerModal from '@/components/MotionFramer/FramerModal';
import { useState } from 'react';
import HeroSection3 from '@/components/IndexPage/HeroSection3';

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pink-300">


    // <MFAnimatePresence>
    //   <HeroSection2></HeroSection2>
    // </MFAnimatePresence>
    
    <main className='h-full bg-green-400'>
      <FramerModal showModal={showModal} setShowModal={setShowModal}></FramerModal>
      <HeroSection3></HeroSection3>
      {/* <HeroSection2 setShowModal={setShowModal}></HeroSection2> */}
    </main>

    // <main>
    //   <MFAnimatePresence setShowModal={setShowModal}>
    //     <FramerModal showModal={showModal} setShowModal={setShowModal}></FramerModal>
    //     <HeroSection2 setShowModal={setShowModal}></HeroSection2>
    //   </MFAnimatePresence>
    // </main>

  )
}
