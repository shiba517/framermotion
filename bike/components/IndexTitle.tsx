import React from 'react';

type TIndexTitle = {
    title: String;
    subTitle?: String
}

const IndexTitle = ({title, subTitle}: TIndexTitle) => {
  return (
    <div className='py-8'>
      <h2 className='text-4xl font-extrabold uppercase text-yellow-500'>{title}</h2>
    </div>
  );
}

export default IndexTitle;
