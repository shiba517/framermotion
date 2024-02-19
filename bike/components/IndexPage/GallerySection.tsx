import { useState } from "react";
import IndexTitle from "../IndexTitle";
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from "next/image";
import defaultImage from '@/public/images/default.jpg'
import defaultImageData from '@/json/defaultImages.json'
import ImageSlider from "../ImageSlider";

const galleryData = defaultImageData

const GallerySection = () => {
  return (
    <div className="px-10 bg-green-800 pb-10 text-center">
      <IndexTitle title='gallery'></IndexTitle>

      <ImageSlider></ImageSlider>

      <div>
        <p>main content</p>
      </div>
    </div>
  );
}

export default GallerySection;
