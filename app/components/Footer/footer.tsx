import { Link } from '@/i18n/routing';
import SocialmediaLinks from '../socialmedia/SocialmediaLinks';

const Footer = () => {
  const footerLinks = [
    { path: '#', name: 'About' },
    { path: '#', name: 'sell on muuza' },
    { path: '#', name: 'Help' },
    { path: '#', name: 'Privacy & terms of service' },
    { path: '/blog', name: 'Blog' },
  ];

  return (
    <footer className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center border-t pt-6">
          {/* Navigation links */}
          <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="text-gray-500 transition duration-100 hover:text-skin active:text-skin"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <SocialmediaLinks />
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} - muuza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
