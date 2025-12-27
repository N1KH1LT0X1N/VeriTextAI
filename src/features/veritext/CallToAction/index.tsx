import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Bounded from '@/components/veritext/Bounded';
import ButtonLink from '@/components/veritext/ButtonLink';

const CallToAction = (): JSX.Element => {
  const t = useTranslations('VeriTextCTA');

  return (
    <Bounded id="pricing" className="relative py-32 text-center font-medium md:py-40">
      <div className="glow absolute -z-10 aspect-square w-full max-w-sm rounded-full bg-blue-500/20 blur-[160px] filter" />

      <div className="glass-container rounded-lg bg-gradient-to-b from-white to-slate-100 p-4 shadow-lg md:rounded-xl">
        <Image
          src="/veritext/cta.png"
          alt="VeriText AI"
          width={96}
          height={96}
          className="mx-auto"
        />
      </div>

      <div className="mt-8 max-w-xl text-balance text-5xl text-slate-900">
        {t('heading')}
      </div>

      <ButtonLink field="/sign-up" className="mt-6">
        {t('cta_button')}
      </ButtonLink>
    </Bounded>
  );
};

export default CallToAction;
