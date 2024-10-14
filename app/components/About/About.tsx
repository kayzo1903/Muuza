import Image from 'next/image';
import { useTranslations } from 'next-intl';
import aboutimage from '@/app/public/images/about-image.jpg'

const AboutPage = () => {
  const t = useTranslations('about');

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2">
          <Image
            src={aboutimage}
            alt="About Muuza"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            loading='lazy'
          />
        </div>

        {/* Text Section */}
        <div className="w-full sm:w-1/2 sm:pl-8 text-center sm:text-left">
          <h1 className="text-foreground text-4xl font-bold mb-4">
            {t('heading')}
          </h1>
          <h2 className="text-skin text-2xl font-semibold mb-4">
            {t('subheading')}
          </h2>
          <p className="text-foreground">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
