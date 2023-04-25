import Image from 'next/image';

import { Button } from '@/components/ui';

const heroImage =
  'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1021&q=80';

export default function Hero() {
  return (
    <div className="relative -mt-14 mb-12 h-[40rem] w-full">
      <Image src={heroImage} alt="best laptops and gadget" priority fill className="object-cover" />
      <div className="absolute left-0 top-0 h-full w-full bg-black/40" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 text-center text-white">
        <h1>New Arrival are here</h1>
        <p>
          The new arrivals have, well, newly arrived. Check out the latest options from our summer
          small-batch release while they&apos;re still in stock.
        </p>
        <Button href="/products">Shop new arrival</Button>
      </div>
    </div>
  );
}
