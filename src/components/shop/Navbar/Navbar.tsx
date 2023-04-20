"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui";

import { Cart, AccountMenu } from "./components";
import { NavbarProps } from "./Navbar.types";

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
  const router = useRouter();

  const onSignIn = () => {
    router.push("/auth/login");
  };

  return (
    <nav className="py-6 bg-white shadow-sm sticky top-0 mb-14 z-10 w-full">
      <div className="container flex items-center justify-between">
        <Link className="font-black text-primary-600" href="/">
          TVAB
        </Link>
        <ul className="flex items-center gap-4">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="hover:text-primary-500 transition-all"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Cart />
          {data?.user ? (
            <AccountMenu session={data} />
          ) : (
            status !== "loading" && (
              <Button onClick={onSignIn} className="py-1 px-4">
                Sign in
              </Button>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
