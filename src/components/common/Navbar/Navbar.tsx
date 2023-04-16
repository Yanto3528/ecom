import Link from "next/link";

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

export function Navbar(props: NavbarProps) {
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
      </div>
    </nav>
  );
}
