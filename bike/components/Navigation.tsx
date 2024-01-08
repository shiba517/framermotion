"use client"

import React from 'react';
import menuJson from '@/json/menu.json'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuData = menuJson


const Navigation = () => {
  return (
    <div>
      {menuData.map((data: any) => {
        const pathname = usePathname()
        const isActive = pathname.startsWith(data.href)

        return (
            <Link 
            href={data.href}
            className={isActive ? 'text-yellow-600' : 'text-pink-600'}
            >{data.title}</Link>
        )
      })}
    </div>
  );
}

export default Navigation;
