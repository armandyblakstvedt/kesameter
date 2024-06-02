import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className=' flex flex-row items-center gap-4 '>
      <h1 className=' flex text-xl'>Kesameter</h1>
      <Link href='https://github.com/armandyblakstvedt/kesameter' target='_blank'>
        <Image src='/github-mark-white.svg' alt='Kesameter' width={30} height={30} />
      </Link>
    </div>
  );
}
