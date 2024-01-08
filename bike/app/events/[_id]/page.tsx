import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
      _id: string
  }
}

export const metadata: Metadata = {
  title: "event singular",
  description: 'This is the description for teh Events page',
}

const page = ({params}: Props) => {
  if (parseInt(params._id) > 100) {
    return notFound();
  } else {
    return (
      <div>
        <p>This is an individual events page:- {params._id}</p>
      </div>
    );
  }
  
}

export default page;
