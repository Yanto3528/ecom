'use client';

import { MoreVertical, LogOut } from 'lucide-react';
import Link from 'next/link';

import { Avatar, DropdownMenu } from '@/components/ui';

import { navItems } from './config';

export default function Sidebar() {
  return (
    <aside className="flex w-[15rem] flex-col bg-white">
      <div className="p-4">
        <h2 className="font-bold">TVAB Dashboard</h2>
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
      <div className="flex items-center gap-2 p-4">
        <Avatar src="" alt="" fallback="YL" />
        <span className="truncate text-sm text-gray-500">yanto3528@gmail.com</span>
        <DropdownMenu>
          <DropdownMenu.Trigger aria-label="More Information">
            <MoreVertical />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content side="top" className="bottom-4 right-20 min-w-[12rem]">
            <DropdownMenu.Item>
              <LogOut size={18} />
              <span>Logout</span>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </div>
    </aside>
  );
}
