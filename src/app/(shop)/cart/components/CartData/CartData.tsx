import { Trash2 } from 'lucide-react';
import Image from 'next/image';

import { InputNumber } from '@/components/ui';
import { formatCurrency } from '@/lib/utils';
import { useCartStore } from '@/store/cart.store';

import { CardDataProps } from './CardData.types';

export default function CartData({ product, quantity }: CardDataProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeCartItem = useCartStore((state) => state.removeItem);

  const onQuantityChange = (value: number) => {
    updateQuantity(value, product);
  };

  const onRemoveItem = () => {
    removeCartItem(product.id);
  };

  return (
    <tr className="border-b border-slate-200">
      <td className="flex items-center gap-4 py-4">
        <Image src={product.images?.[0] || ''} alt={product.name} width={100} height={100} />
        <div>
          <p className="font-bold">{product.name}</p>
        </div>
      </td>
      <td className="py-4 text-center">{formatCurrency(product.price)}</td>
      <td>
        <InputNumber value={quantity} onChange={onQuantityChange} min={1} max={product.quantity} />
      </td>
      <td className="py-4 text-center">{formatCurrency(Number(product.price) * quantity)}</td>
      <td className="py-4 text-center">
        <button type="button" onClick={onRemoveItem}>
          <Trash2 />
        </button>
      </td>
    </tr>
  );
}
