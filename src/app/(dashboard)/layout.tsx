import { ReactNode } from "react";

import { Sidebar } from "@/components/dashboard";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <div className="p-4 flex-1">{children}</div>
    </section>
  );
}
