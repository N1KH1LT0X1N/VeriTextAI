import Image from 'next/image';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import Bounded from '@/components/veritext/Bounded';

const Bento = (): JSX.Element => {
  const t = useTranslations('VeriTextBento');

  const bentoFeatures = [
    {
      title: t('feature1_title'),
      body: t('feature1_body'),
      image: '/veritext/ai-paraphrase.png',
      wide: false,
    },
    {
      title: t('feature2_title'),
      body: t('feature2_body'),
      image: '/veritext/code-plagiarism.png',
      wide: true,
    },
    {
      title: t('feature3_title'),
      body: t('feature3_body'),
      image: '/veritext/lms.png',
      wide: false,
    },
    {
      title: t('feature4_title'),
      body: t('feature4_body'),
      image: '/veritext/time-saving.png',
      wide: false,
    },
  ];

  return (
    <Bounded id="features">
      <h2 className="text-balance text-center text-5xl font-medium text-slate-900 md:text-7xl">
        {t.rich('heading', {
          em: (chunks) => (
            <em className="bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text not-italic text-transparent">
              {chunks}
            </em>
          ),
        })}
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-600">
        <p>{t('subheading')}</p>
      </div>

      <div className="mt-16 grid max-w-4xl grid-rows-[auto_auto_auto] gap-8 md:grid-cols-3 md:gap-10">
        {bentoFeatures.map((item) => (
          <div
            className={clsx(
              'glass-container row-span-3 grid grid-rows-subgrid gap-4 rounded-lg bg-gradient-to-b from-white to-slate-50 p-4 shadow-sm',
              item.wide ? 'md:col-span-2' : 'md:col-span-1',
            )}
            key={item.title}
          >
            <h3 className="text-2xl text-slate-900">{item.title}</h3>
            <div className="max-w-md text-balance text-slate-600">
              <p>{item.body}</p>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={200}
              className="max-h-36 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Bento;
