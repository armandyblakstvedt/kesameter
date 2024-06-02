'use client';

import InfoBox from '@/app/components/InfoBox';
import { useEffect, useState } from 'react';

type ComponentProps = {
  datetime: string;
};

export default function Timer(props: ComponentProps) {
  const { datetime } = props;
  const date = new Date(datetime).getTime() - new Date(datetime).getTimezoneOffset() * 60 * 1000;

  // keep track of time since last kesam
  const [diff, setDiff] = useState(new Date().getTime() - date);

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date();
      setDiff(dateNow.getTime() - date);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <InfoBox
      title='siden siste kesam'
      value={diff ? `${hours}t ${minutes}m ${seconds}s` : 'ingen data'}
      icon='/timer.svg'
    />
  );
}
