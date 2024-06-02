import Image from 'next/image';
import React from 'react';

type ComponentProps = {
  icon: string;
  title: string;
  value: string;
};
export default function InfoBox(props: ComponentProps) {
  const { icon, title, value } = props;
  return (
    <div className=' flex flex-col w-40 sm:w-full aspect-square border items-center justify-between rounded-lg p-2'>
      <Image src={icon} alt={title} width={50} height={50} />
      <h3 className='text-center text-2xl font-bold'>{value}</h3>
      <h4 className='text-center text-md font-bold'>{title}</h4>
    </div>
  );
}
