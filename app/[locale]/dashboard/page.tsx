import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('Dashboard');
  return (
    <main className='w-full'>
      <h1 className='text-center py-2'>{t('title')}</h1>     
    </main>
  )}