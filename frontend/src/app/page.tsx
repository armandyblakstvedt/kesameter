import Content from '@/app/components/Content';
import Header from '@/app/components/Header';
import InfoBox from '@/app/components/InfoBox';
import Statistics from '@/app/components/Statistics';

export default function Home() {
  return (
    <main className='flex flex-col bg-main min-h-screen w-screen p-2'>
      <Header />
      <Content />
      <Statistics />
    </main>
  );
}
