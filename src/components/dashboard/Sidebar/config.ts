import { Home, Package, Boxes, Tag, ShoppingCart } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Products",
    icon: Package,
    href: "/dashboard/products",
  },
  {
    title: "Categories",
    icon: Tag,
    href: "/dashboard/categories",
  },
  {
    title: "Collections",
    icon: Boxes,
    href: "/dashboard/collections",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    href: "/dashboard/orders",
  },
];
