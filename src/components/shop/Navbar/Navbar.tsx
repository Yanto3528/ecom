'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui';

import { Cart, AccountMenu } from './components';

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Categories',
    href: '/categories',
  },
  {
    label: 'Products',
    href: '/products',
  },
];

export default function Navbar() {
  const { data, status } = useSession();
  const router = useRouter();

  const onSignIn = () => {
    router.push('/auth/login');
  };

  return (
    <nav className="sticky top-0 z-10 mb-14 w-full bg-white py-6 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link className="font-black text-primary-600" href="/">
          TVAB
        </Link>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.label} className="transition-all hover:text-primary-500">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Cart />
          {data?.user ? (
            <AccountMenu session={data} />
          ) : (
            status !== 'loading' && (
              <Button onClick={onSignIn} className="px-4 py-1">
                Sign in
              </Button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
