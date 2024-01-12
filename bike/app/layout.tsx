import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import FramerModal from '@/components/MotionFramer/FramerModal'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bike Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-yellow-300 flex flex-col h-screen justify-between`}>
        <header className='p-2 bg-blue-950 text-slate-300'>
          <Navigation></Navigation>
        </header>
        {children}
        <footer className='p-2 bg-blue-950 text-slate-300'>This is the footer</footer>
      </body>
    </html>
  )
}
