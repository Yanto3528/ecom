import { ReactNode } from 'react';

import { Navbar, Footer } from '@/components/shop';

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </>
  );
}
