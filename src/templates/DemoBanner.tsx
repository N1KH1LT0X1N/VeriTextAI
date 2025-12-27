import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    VeriText AI - Academic Integrity Platform -
    {' '}
    <Link href="/sign-up">Start Your Free Trial</Link>
  </StickyBanner>
);
