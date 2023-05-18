'use client';

import { CartTable, Summary } from './components';

export default function Cart() {
  return (
    <main className="container">
      <div className="flex flex-col gap-10">
        <CartTable />
        <Summary />
      </div>
    </main>
  );
}
