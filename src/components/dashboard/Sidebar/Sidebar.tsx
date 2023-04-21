'use client';

import { LogOut } from 'lucide-react';
import Link from 'next/link';

import { navItems } from './config';

export default function Sidebar() {
  return (
    <aside className="flex w-[15rem] flex-col bg-white">
      <div className="p-4">
        <h2 className="text-center font-black text-primary">TVAB</h2>
        {/* <div className="flex flex-col items-center justify-center gap-2">
          <Avatar src="" alt="" fallback="YL" />
          <span className="truncate text-sm text-gray-500">yanto3528@gmail.com</span>
        </div> */}
      </div>
      <ul className="flex flex-1 flex-col gap-2 px-2 py-4">
        {navItems.map(({ title, href, icon: Icon }) => (
          <li key={title}>
            <Link
              className="flex w-full items-center gap-4 rounded-md p-2 text-sm font-medium hover:bg-primary-50"
              href={href}
            >
              <Icon size={18} />
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 px-2 py-4">
        <button
          type="button"
          className="flex w-full items-center gap-4 rounded-md p-2 text-sm font-medium hover:bg-primary-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
