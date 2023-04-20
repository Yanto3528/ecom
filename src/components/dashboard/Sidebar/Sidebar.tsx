"use client";

import Link from "next/link";
import { MoreVertical, LogOut } from "lucide-react";

import { navItems } from "./config";
import { Avatar, DropdownMenu } from "@/components/ui";

export default function Sidebar() {
  return (
    <aside className="w-[15rem] bg-white flex flex-col">
      <div className="p-4">
        <h2 className="font-bold">TVAB Dashboard</h2>
      </div>
      <ul className="px-2 py-4 flex-1 flex flex-col gap-2">
        {navItems.map(({ title, href, icon: Icon }) => (
          <li key={title}>
            <Link
              className="flex w-full rounded-md p-2 text-sm font-medium items-center gap-4 hover:bg-primary-50"
              href={href}
            >
              <Icon size={18} />
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center p-4 gap-2">
        <Avatar src="" alt="" fallback="YL" />
        <span className="truncate text-gray-500 text-sm">
          yanto3528@gmail.com
        </span>
        <DropdownMenu>
          <DropdownMenu.Trigger aria-label="More Information">
            <MoreVertical />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            side="top"
            className="bottom-4 right-20 min-w-[12rem]"
          >
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
