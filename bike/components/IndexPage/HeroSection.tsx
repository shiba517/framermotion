import React from 'react';
import { THeroSectionProps } from '@/app/_lib/types';

const HeroSection = (params: THeroSectionProps) => {
  return (
    <div>
      <p className='text-xl uppercase p-4 bg-pink-200'>{params.title}</p>
      <p className='text-sm p-4 bg-pink-500'>{params.subtitle}</p>
    </div>
  );
}

export default HeroSection;
