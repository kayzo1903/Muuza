import {useTranslations} from 'next-intl';

 
export default function HomePage() {
  const t = useTranslations('Dashboard');
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )}