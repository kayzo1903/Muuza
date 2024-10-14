import { FaChartLine, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const HowToEarn = () => {
  const t = useTranslations('howToEarnWithMuuza');

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-foreground text-3xl font-bold mb-6">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaChartLine className="text-4xl text-skin mb-4 mx-auto" />
            <h3 className="text-skin text-xl font-semibold mb-2">{t('trackSales.title')}</h3>
            <p className="text-foreground">{t('trackSales.description')}</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaShoppingCart className="text-4xl text-skin mb-4 mx-auto" />
            <h3 className="text-skin text-xl font-semibold mb-2">{t('easyOrders.title')}</h3>
            <p className="text-foreground">{t('easyOrders.description')}</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaUsers className="text-4xl text-skin mb-4 mx-auto" />
            <h3 className="text-skin text-xl font-semibold mb-2">{t('growAudience.title')}</h3>
            <p className="text-foreground">{t('growAudience.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToEarn;
