"use client";

import Link from "next/link";

import { Button, Avatar } from "@/components/ui";

import { Cart } from "./components";
import { NavbarProps } from "./Navbar.types";
import { signIn, useSession } from "next-auth/react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "Products",
    href: "/products",
  },
];

export default function Navbar(props: NavbarProps) {
  const { data, status } = useSession();

  const onSignIn = () => {
    signIn("google");
  };

  return (
    <nav className="py-6 bg-white shadow-sm sticky top-0 mb-14 z-10">
      <div className="container flex items-center justify-between">
        <Link className="font-black text-blue-600" href="/">
          TVAB
        </Link>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li key={item.label} className="hover:text-blue-500 transition-all">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Cart />
          {data?.user ? (
            <Avatar
              src={data.user.image || ""}
              alt={data.user.name || ""}
              fallback="YL"
            />
          ) : (
            status !== "loading" && <Button onClick={onSignIn}>Sign in</Button>
          )}
        </div>
      </div>
    </nav>
  );
}
