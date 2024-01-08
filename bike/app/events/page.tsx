import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Absolute Events'
  },
  description: 'This is the description for the Events page',
}

const page = () => {
  return (
    <div>
      <h1>Events page</h1>
    </div>
  );
}

export default page;
