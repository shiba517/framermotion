import React from 'react';

type TIndexTitle = {
    title: String;
    subTitle?: String
}

const IndexTitle = ({title, subTitle}: TIndexTitle) => {
  return (
    <div className='py-8 text-start'>
      <h2 className='text-8xl font-extrabold uppercase text-yellow-500'>{title}</h2>
      {/* <p className='text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus provident culpa </p> */}
    </div>
  );
}

export default IndexTitle;
