import { Link, } from '@/i18n/routing';
import { verifySession } from '@/libs/dtl';
import {useTranslations} from 'next-intl';


export default function DashboardPage() {
  const t = useTranslations('Dashboard');
   verifySession()

  return (
    <main className='w-full'>
      <h1 className='text-center py-2'>{t('title')}</h1>     
      <div className='mt-16 w-full flex items-center'>
       <Link href={'/shop'} className='bg-skin w-fit mx-auto rounded-lg text-white py-2 px-6'>
          home
       </Link>
      </div>
    </main>
  )}