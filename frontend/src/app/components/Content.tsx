import { getKesamCount } from '@/app/utils/api';
import React from 'react';

export default async function Content() {
  const data = await getKesamCount();
  const { count } = data;

  return (
    <div className=' flex flex-col gap-4 w-full grow items-center justify-center'>
      <h3 className=' text-xl'>antall kesam konsumert</h3>
      <h2 className=' text-9xl tracking-widest'>{count || 0}</h2>
    </div>
  );
}
