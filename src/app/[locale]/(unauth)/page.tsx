import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Header, Footer } from '@/components/veritext';
import {
  Hero,
  Bento,
  Showcase,
  Integrations,
  CaseStudies,
  CallToAction,
} from '@/features/veritext';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: 'VeriText AI - Academic Integrity & Plagiarism Detection',
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Header />
      <Hero />
      <Bento />
      <Showcase />
      <Integrations />
      <CaseStudies />
      <CallToAction />
      <Footer />
    </>
  );
};

export default IndexPage;

