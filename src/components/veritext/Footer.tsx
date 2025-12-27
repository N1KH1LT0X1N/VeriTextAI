import Link from 'next/link';
import { useTranslations } from 'next-intl';

import WordMark from '@/components/veritext/WordMark';

export default function Footer() {
  const t = useTranslations('VeriTextFooter');

  const navigation = [
    { label: t('features'), link: '/#features' },
    { label: t('integrations'), link: '/#integrations' },
    { label: t('pricing'), link: '/#pricing' },
    { label: t('contact'), link: '/#contact' },
  ];

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 bg-white px-8 py-7 md:flex-row">
      <Link href="/">
        <WordMark />
        <span className="sr-only">{t('features')}</span>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.link}
                className="inline-flex min-h-11 items-center"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-4 w-full text-center md:mt-0 md:w-auto">
        <p className="text-sm text-slate-500">{t('copyright')}</p>
      </div>
    </footer>
  );
}
