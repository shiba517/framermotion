import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type TAboutCard = {
    title: String;
    content?: String;
    faIcon?: String;
}

const AboutCard = ({title, content, faIcon}: TAboutCard) => {
  const faIconToString = String(faIcon)

  return (
    <div className='p-4 bg-green-500 text-black h-full'>
      <div className=''>
        <h3 className='font-bold capitalize text-lg'>{title}</h3>
        <FontAwesomeIcon 
        icon={faIconToString as IconProp}
        className=' text-purple-950 text-4xl py-2'/>
      </div>
      <div className='line-clamp-6 text-sm'>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default AboutCard;
