import InfoBox from '@/app/components/InfoBox';
import { getKesamCount } from '@/app/utils/api';
import React from 'react';

export default async function Statistics() {
  const data = await getKesamCount();

  const { count, datetime } = data;

  const startDate = new Date(2024, 5, 1);
  const dateNow = new Date();
  // round to one decimal
  const averagePerDay = count
    ? (count / ((new Date().getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24)).toFixed(1)
    : 0;
  // date from timestamp in postgres to seconds after 1970
  const date = new Date(datetime).getTime();
  const diff = dateNow.getTime() - date - /** utc to localtime */ 7200000;
  const hours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const minutes = Math.floor((diff / (1000 * 60 * 60)) % 60);
  const seconds = Math.floor(diff / 1000) % 60;

  return (
    <div className=' flex flex-row w-full items-center justify-center mb-12'>
      <div className=' flex flex-row w-full max-w-2xl justify-evenly gap-2'>
        <InfoBox
          title='totalt brukt på kesam'
          value={`${count ? count * 24 : 0} kr`}
          icon='/money.svg'
        />
        <InfoBox title='snitt per dag' value={`${averagePerDay} stk`} icon='/chart.svg' />
        <InfoBox
          title='siden siste kesam'
          value={diff ? `${hours}t ${minutes}m ${seconds}s` : 'ingen data'}
          icon='/timer.svg'
        />
      </div>
    </div>
  );
}
