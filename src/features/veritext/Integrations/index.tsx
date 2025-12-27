import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Bounded from '@/components/veritext/Bounded';
import StarBackground from './StarBackground';
import AnimatedContent from './AnimatedContent';

const Integrations = (): JSX.Element => {
  const t = useTranslations('VeriTextIntegrations');

  return (
    <Bounded id="integrations" className="relative overflow-hidden">
      <Image
        src="/veritext/integrations-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
        quality={90}
      />
      <StarBackground />

      <div className="relative">
        <h2 className="mx-auto max-w-2xl text-balance text-center text-5xl font-medium text-slate-900 md:text-7xl">
          {t('heading')}
        </h2>

        <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-600">
          <p>{t('description')}</p>
        </div>

        <AnimatedContent />
      </div>
    </Bounded>
  );
};

export default Integrations;
