import { Link } from '@/i18n/routing';
import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('Dashboard');
  return (
    <main className='w-full'>
      <h1 className='text-center py-2'>{t('title')}</h1>     
      <div className='mt-16 mx-auto'>
       <Link href={'/shop'}>
          home
       </Link>
      </div>
    </main>
  )}