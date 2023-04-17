import { Product } from "@/types/product";
import { create } from "zustand";

interface CartSlice {
  items: {
    quantity: number;
    product: Product;
  }[];
  addItem: (quantity: number, product: Product) => void;
  incrementQuantity: (product: Product) => void;
  decrementQuantity: (product: Product) => void;
  removeItem: (quantity: number, product: Product) => void;
}

export const useCartStore = create<CartSlice>((set) => ({
  items: [],
  addItem: (quantity, product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id
      );

      if (!existingItem) {
        return {
          items: [...state.items, { quantity, product }],
        };
      }

      return {
        items: state.items.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }

          return item;
        }),
      };
    }),
  removeItem: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
}));
