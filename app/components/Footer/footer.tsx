import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/routing";
import Image from "next/image";
import logo from "@/app/public/logo/muuzalogo.png";
import SocialmediaLinks from '../socialmedia/SocialmediaLinks';

const Footer = () => {
  const t = useTranslations('footer');

  return (
    <footer className="bg-background px-4">
      <div className="pb-16 pt-4 sm:pt-10 lg:pt-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">
                <Image 
                  alt="Muuza logo"
                  src={logo} 
                  style={{
                      height: "40px",
                      width: "170px"
                  }}
                  priority
                />
              </div>
              <p className="text-gray-500 sm:pr-8">{t('description')}</p>
            </div>

            {/* Products */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">{t('products')}</div>
              <nav className="flex flex-col gap-4">
                <Link href="/overview" className="text-gray-500 transition duration-100 hover:text-skin">{t('overview')}</Link>
                <Link href="/solutions" className="text-gray-500 transition duration-100 hover:text-skin">{t('solutions')}</Link>
                <Link href="/pricing" className="text-gray-500 transition duration-100 hover:text-skin">{t('pricing')}</Link>
                <Link href="/customers" className="text-gray-500 transition duration-100 hover:text-skin">{t('customers')}</Link>
              </nav>
            </div>

            {/* Company */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">{t('company')}</div>
              <nav className="flex flex-col gap-4">
                <Link href="/about" className="text-gray-500 transition duration-100 hover:text-skin">{t('about')}</Link>
                <Link href="/investor-relations" className="text-gray-500 transition duration-100 hover:text-skin">{t('investorRelations')}</Link>
                <Link href="/jobs" className="text-gray-500 transition duration-100 hover:text-skin">{t('jobs')}</Link>
                <Link href="/press" className="text-gray-500 transition duration-100 hover:text-skin">{t('press')}</Link>
                <Link href="/blog" className="text-gray-500 transition duration-100 hover:text-skin">{t('blog')}</Link>
              </nav>
            </div>

            {/* Support */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">{t('support')}</div>
              <nav className="flex flex-col gap-4">
                <Link href="/contact" className="text-gray-500 transition duration-100 hover:text-skin">{t('contact')}</Link>
                <Link href="/docs" className="text-gray-500 transition duration-100 hover:text-skin">{t('documentation')}</Link>
                <Link href="/chat" className="text-gray-500 transition duration-100 hover:text-skin">{t('chat')}</Link>
                <Link href="/faq" className="text-gray-500 transition duration-100 hover:text-skin">{t('faq')}</Link>
              </nav>
            </div>

            {/* Legal */}
            <div>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-800">{t('legal')}</div>
              <nav className="flex flex-col gap-4">
                <Link href="/terms" className="text-gray-500 transition duration-100 hover:text-indigo-500">{t('terms')}</Link>
                <Link href="/privacy" className="text-gray-500 transition duration-100 hover:text-indigo-500">{t('privacy')}</Link>
                <Link href="/cookie-settings" className="text-gray-500 transition duration-100 hover:text-indigo-500">{t('cookieSettings')}</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex items-center justify-between gap-4 py-8">
            <span className="text-sm text-gray-400"> © {new Date().getFullYear()} Muuza. {t('rightsReserved')} </span>

            <SocialmediaLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
