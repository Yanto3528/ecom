import Image from 'next/image';

const usps = [
  {
    image: '/images/free-shipping.png',
    title: 'Free shipping',
    description: 'We offer free shipping on all orders over $100',
  },
  {
    image: '/images/discount.png',
    title: 'Discount',
    description: 'Looking for a deal? You can use the code "SPECIALFORYOU" at checkout.',
  },
  {
    image: '/images/low-price.png',
    title: 'Lowest price',
    description: 'We offer the best price for our products. We guarantee it.',
  },
  {
    image: '/images/fast-delivery.png',
    title: 'Fast delivery',
    description: 'Receive your products within hours instead of days.',
  },
];

export default function USP() {
  return (
    <section className="container bg-gray-100 py-20">
      <ul className="grid grid-cols-4 gap-6">
        {usps.map(({ title, description, image }) => (
          <li key={title} className="flex flex-col items-center gap-2 text-center">
            <Image src={image} alt={title} width={70} height={70} />
            <p className="font-medium">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
