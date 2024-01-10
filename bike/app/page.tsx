"use client"

import IndexPage from '@/components/IndexPage/IndexPage'
import MFAnimatePresence from '@/components/MotionFramer/MFAnimatePresence';

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-pink-300">


    <MFAnimatePresence>
      <main className="text-center p-24 bg-pink-800">
        <p className='bg-pink-900 p-6'>conent here</p>
      </main>
    </MFAnimatePresence>
  )
}
