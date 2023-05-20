'use client';

import Link from 'next/link';

import { useSupabaseContext } from '@/contexts/auth.context';

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
  const { currentUser, isLoading } = useSupabaseContext();

  return (
    <nav className="sticky top-0 z-10 mb-14 w-full bg-white py-2 shadow-sm">
      <div className="container flex items-center justify-between">
        <Link className="font-black text-primary-600" href="/">
          TVAB
        </Link>
        <ul className="flex items-center gap-4 py-2">
          {navItems.map((item) => (
            <li key={item.label} className="font-medium transition-all hover:text-primary-500">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Cart />
          {currentUser ? (
            <AccountMenu currentUser={currentUser} />
          ) : (
            !isLoading && (
              <Link
                href="/auth/login"
                className="py-2 font-medium transition-all hover:text-primary"
              >
                Sign in
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
