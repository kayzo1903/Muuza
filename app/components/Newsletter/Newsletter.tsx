import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import newsletter from "@/app/public/images/newsletter1.jpg"

const NewsletterSubscription = () => {
  const  t  = useTranslations("newsletter");

  return (
    <div className="bg-background py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          {/* Image - Start */}
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2">
            <Image
              src={newsletter}
              loading="lazy"
              alt="Food safety and nutrition"
              className="absolute inset-0 h-full"
              style={{
               objectFit : 'cover',
              }}
            />
          </div>
          {/* Image - End */}

          {/* Content - Start */}
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-foreground sm:text-left sm:text-2xl lg:text-3xl">
                  {t('heading')}
                </h2>
                <p className="text-center text-skin sm:text-left">
                  {t('subheading')}
                </p>
              </div>

              <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                <input
                  placeholder="Email"
                  className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-foreground transition duration-100 focus:ring"
                />
                <button className="inline-block rounded bg-secondcolor text-white px-8 py-2 text-center text-sm font-semibold outline-none ring-foreground transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  {t('button')}
                </button>
              </form>
            </div>
          </div>
          {/* Content - End */}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
