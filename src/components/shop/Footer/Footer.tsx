import Link from "next/link";

const links = [
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

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-10 mt-10">
      <div className="container flex gap-10">
        <Link className="font-black text-blue-600" href="/">
          TVAB
        </Link>
        <ul className="flex flex-col gap-4">
          {links.map((link) => (
            <li key={link.label} className="hover:text-blue-500 transition-all">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center py-4">TVAB, all rights reserved 2023</p>
    </footer>
  );
}
