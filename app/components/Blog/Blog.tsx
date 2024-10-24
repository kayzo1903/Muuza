import { useTranslations } from 'next-intl';
import Contents from '../Blogcomponents/Contents/Contents';


const BlogSection = () => {
  const  t  = useTranslations("blog"); // Use the translation hook



  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{t('newsAndUpdates')}</h2>
        </div>
        {/* text - end */}

        <div className='w-full mx-auto'>
          <Contents  />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
