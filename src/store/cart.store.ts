import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ProductEntity } from '@/entities/product.entity';

interface CartSlice {
  items: {
    quantity: number;
    product: ProductEntity;
  }[];
  addItem: (quantity: number, product: ProductEntity) => void;
  updateQuantity: (quantity: number, product: ProductEntity) => void;
  incrementQuantity: (product: ProductEntity) => void;
  decrementQuantity: (product: ProductEntity) => void;
  removeItem: (id: number) => void;
}

// export const useCartStore = create<CartSlice>((set) => ({
//   items: defaultItems,
//   addItem: (quantity, product) =>
//     set((state) => {
//       const existingItem = state.items.find(
//         (item) => item.product.id === product.id
//       );

//       if (!existingItem) {
//         return {
//           items: [...state.items, { quantity, product }],
//         };
//       }

//       return {
//         items: state.items.map((item) => {
//           if (item.product.id === product.id) {
//             return {
//               ...item,
//               quantity: item.quantity + quantity,
//             };
//           }

//           return item;
//         }),
//       };
//     }),
//   updateQuantity: (quantity, product) =>
//     set((state) => ({
//       items: state.items.map((item) =>
//         item.product.id === product.id ? { ...item, quantity } : item
//       ),
//     })),
//   removeItem: (id: number) =>
//     set((state) => ({
//       items: state.items.filter((item) => item.product.id !== id),
//     })),
//   incrementQuantity: (product) =>
//     set((state) => ({
//       items: state.items.map((item) =>
//         item.product.id === product.id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       ),
//     })),
//   decrementQuantity: (product) =>
//     set((state) => ({
//       items: state.items.map((item) =>
//         item.product.id === product.id
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       ),
//     })),
// }));

export const useCartStore = create<CartSlice>()(
  persist(
    (set) => ({
      items: [],
      addItem: (quantity, product) =>
        set((state) => {
          const existingItem = state.items.find((item) => item.product.id === product.id);

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
      updateQuantity: (quantity, product) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === product.id ? { ...item, quantity } : item
          ),
        })),
      removeItem: (id: number) =>
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== id),
        })),
      incrementQuantity: (product) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      decrementQuantity: (product) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        })),
    }),
    {
      name: 'cart',
    }
  )
);
