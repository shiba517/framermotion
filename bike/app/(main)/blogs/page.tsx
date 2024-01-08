import Link from 'next/link';
import React from 'react';

const page = () => {
  const blog_id = 88
  return (
    <div>
      This is the blogs page
      <div>
        <ul>
          <li>
            <Link href="blogs/22">blog 22 button</Link>
            <Link href={`blogs/${blog_id}`}>blog {blog_id} button</Link>
            <Link href="blogs/1" replace>replace button</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default page;
