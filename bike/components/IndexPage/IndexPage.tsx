import React from 'react';
import HeroSection from './HeroSection';
import baseInfoJson from '@/json/baseInfo.json'

const baseInfoData = baseInfoJson[0]

const IndexPage = () => {
  return (
    <div>
      <HeroSection
      title={baseInfoData.title}
      subtitle={baseInfoData.subtitle}
      ></HeroSection>
    </div>
  );
}

export default IndexPage;
