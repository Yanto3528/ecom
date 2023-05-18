import Image from 'next/image';

import { ProductImagesProps } from './ProductImages.types';

export default function ProductImages({ images }: ProductImagesProps) {
  return (
    <div>
      <Image src={images?.[0] || ''} alt="adklj" width={500} height={600} />
    </div>
  );
}
