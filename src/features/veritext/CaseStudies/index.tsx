import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import Bounded from '@/components/veritext/Bounded';

const CaseStudies = (): JSX.Element => {
  const t = useTranslations('VeriTextCaseStudies');

  const caseStudies = [
    {
      id: 'stanford-university',
      company: t('stanford_name'),
      description: t('stanford_description'),
      cta: t('stanford_cta'),
      logoImage: '/veritext/stanford.png',
    },
    {
      id: 'mit-opencourseware',
      company: t('mit_name'),
      description: t('mit_description'),
      cta: t('mit_cta'),
      logoImage: '/veritext/mit.png',
    },
  ];

  return (
    <Bounded>
      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium text-slate-900 md:text-7xl">
        {t('heading')}
      </h2>

      <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-600">
        <p>{t('description')}</p>
      </div>

      <div className="mt-20 grid gap-16">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={caseStudy.id}
            className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
          >
            <div className="col-span-1 flex flex-col justify-center gap-4">
              <h3 className="text-4xl text-slate-900">{caseStudy.company}</h3>
              <div className="max-w-md text-slate-600">
                <p>{caseStudy.description}</p>
              </div>

              <Link
                href={`/case-study/${caseStudy.id}`}
                className="text-blue-600 after:absolute after:inset-0 hover:underline"
              >
                {caseStudy.cta}
              </Link>
            </div>
            <Image
              src={caseStudy.logoImage}
              alt={caseStudy.company}
              width={800}
              height={600}
              quality={100}
              className={clsx(
                'rounded-xl lg:col-span-2',
                index % 2 && 'md:-order-1',
              )}
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default CaseStudies;
