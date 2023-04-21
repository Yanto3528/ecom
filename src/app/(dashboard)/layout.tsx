import { ReactNode } from 'react';

import { Sidebar } from '@/components/dashboard';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </section>
  );
}
