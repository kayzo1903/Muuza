import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import blogimage from '@/app/public/images/newsletter.jpg'


const BlogSection = () => {
  const  t  = useTranslations("blog"); // Use the translation hook

  const posts = [
    {
      slug: 'new-trends-in-tech',
      date: 'July 19, 2021',
      title: 'New trends in Tech',
      description: 'This is a section of some simple filler text, also known as placeholder text.',
      imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
    },
    {
      slug: 'working-with-legacy-stacks',
      date: 'April 07, 2021',
      title: 'Working with legacy stacks',
      description: 'This is a section of some simple filler text, also known as placeholder text.',
      imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600',
    },
    {
      slug: '10-best-smartphones-for-devs',
      date: 'March 15, 2021',
      title: '10 best smartphones for devs',
      description: 'This is a section of some simple filler text, also known as placeholder text.',
      imageUrl: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600',
    },
    {
      slug: '8-high-performance-notebooks',
      date: 'January 27, 2021',
      title: '8 High performance Notebooks',
      description: 'This is a section of some simple filler text, also known as placeholder text.',
      imageUrl: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600',
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{t('newsAndUpdates')}</h2>
        </div>
        {/* text - end */}

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
          {/* article - start */}
          {posts.map((post) => (
            <div key={post.slug} className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
              <Link href={`/blog/${post.slug}`} className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                <Image
                 src={blogimage}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  width={600}
                  height={400}
                />
              </Link>

              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-sm text-gray-400">{post.date}</span>

                <h2 className="text-xl font-bold text-foreground">
                  <Link href={`/blog/${post.slug}`} className="transition duration-100 hover:text-gray-700 active:text-gray-800">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-500">{post.description}</p>

                <div>
                  <Link href={`/blog/${post.slug}`} className="font-semibold text-skin transition duration-100 hover:text-gray-600 active:text-gray-700">
                    {t('readMore')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* article - end */}
          <div className='w-full'>
              <button className='text-white bg-secondcolor rounded-md py-2 px-2 text-xl hover:text-skin transition-all duration-300'>{t('loadMore')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
