import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PiGear } from 'react-icons/pi';

import Bounded from '@/components/veritext/Bounded';
import ButtonLink from '@/components/veritext/ButtonLink';
import AnimatedContent from './AnimatedContent';

const Showcase = (): JSX.Element => {
  const t = useTranslations('VeriTextShowcase');

  return (
    <Bounded className="relative">
      <div className="glow absolute -z-10 aspect-square w-full max-w-xl rounded-full bg-blue-400/10 blur-3xl filter" />

      <AnimatedContent>
        <h2 className="text-balance text-center text-5xl font-medium text-slate-900 md:text-7xl">
          {t('heading')}
        </h2>
      </AnimatedContent>

      <div className="mt-16 grid items-center gap-8 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-8 py-8 shadow-lg backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-blue-500/20 p-4 text-3xl text-blue-600">
            <PiGear />
          </div>
          <div className="mt-6 text-2xl font-normal text-slate-900">
            <h3>{t('subheading')}</h3>
          </div>

          <div className="prose mt-4 max-w-xl text-slate-600">
            <p>{t('description')}</p>
          </div>

          <ButtonLink field="/#integrations" className="mt-6">
            {t('cta_button')}
          </ButtonLink>
        </div>

        <Image
          src="/veritext/workflow.png"
          alt="Workflow integration"
          width={800}
          height={600}
          className="opacity-90 shadow-2xl lg:col-span-2 lg:-order-1 lg:translate-x-[-15%] lg:pt-0"
        />
      </div>
    </Bounded>
  );
};

export default Showcase;
