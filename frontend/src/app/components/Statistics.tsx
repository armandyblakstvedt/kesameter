import InfoBox from '@/app/components/InfoBox';
import Timer from '@/app/components/Timer';
import { getKesamCount } from '@/app/utils/api';
import React from 'react';

export default async function Statistics() {
  const data = await getKesamCount();

  const { count, datetime } = data;

  const startDate = new Date(2024, 5, 1);
  // round to one decimal
  const averagePerDay = count
    ? (count / ((new Date().getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24)).toFixed(1)
    : 0;
  // convert date to greenwich time and calculate difference with respect to negative or positive timezone

  return (
    <div className=' flex flex-row w-full items-center justify-center mb-2 sm:mb-12'>
      <div className=' flex flex-row w-full max-w-2xl justify-evenly gap-2'>
        <InfoBox
          title='total kesamkostnad'
          value={`${count ? count * 24 : 0} kr`}
          icon='/money.svg'
        />
        <InfoBox title='snitt per dag' value={`${averagePerDay} stk`} icon='/chart.svg' />
        <Timer datetime={datetime} />
      </div>
    </div>
  );
}
