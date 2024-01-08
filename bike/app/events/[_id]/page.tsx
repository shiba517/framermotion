import React from 'react';
import { notFound } from 'next/navigation';

const page = ({
  params,
}: {
  params: {
    _id: string
  }
}) => {
  if (parseInt(params._id) > 100) {
    return notFound();
  }
  return (
    <div>
      <p>This is an individual events page</p>
    </div>
  );
}

export default page;
