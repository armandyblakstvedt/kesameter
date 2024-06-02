import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <div className=' flex flex-row items-center gap-4 '>
      <h1 className=' flex text-xl'>Kesameter</h1>
      <Image src='/github-mark-white.svg' alt='Kesameter' width={30} height={30} />
    </div>
  );
}
