"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LogOut } from "lucide-react";

import { Button, Avatar, DropdownMenu } from "@/components/ui";

import { Cart } from "./components";
import { NavbarProps } from "./Navbar.types";
import { signIn, signOut, useSession } from "next-auth/react";

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

  const onLogout = () => {
    signOut();
  };

  return (
    <nav className="py-6 bg-white shadow-sm sticky top-0 mb-14 z-10 w-full">
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
            <DropdownMenu>
              <DropdownMenu.Trigger className="flex items-center justify-center">
                <Avatar
                  src={data.user.image || ""}
                  alt={data.user.name || ""}
                  fallback="YL"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>
                  <User size={18} />
                  <span>Profile</span>
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={onLogout}>
                  <LogOut size={18} />
                  <span>Logout</span>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu>
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
