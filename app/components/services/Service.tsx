import { FaTruck, FaHandsHelping, FaHeadset } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const ServicesProvided = () => {
  const t = useTranslations('servicesWeProvide');

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-foreground text-3xl font-bold mb-6">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaTruck className="text-4xl text-skin mb-4 mx-auto" />
            <h3 className="text-skin text-xl font-semibold mb-2">{t('fastDelivery.title')}</h3>
            <p className="text-foreground">{t('fastDelivery.description')}</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaHandsHelping className="text-4xl text-skin mb-4 mx-auto" />
            <h3 className="text-skin text-xl font-semibold mb-2">{t('customerSupport.title')}</h3>
            <p className="text-foreground">{t('customerSupport.description')}</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaHeadset className="text-4xl text-skin mb-4 mx-auto" />
            <h3 className="text-skin text-xl font-semibold mb-2">{t('vendorAssistance.title')}</h3>
            <p className="text-foreground">{t('vendorAssistance.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProvided;
