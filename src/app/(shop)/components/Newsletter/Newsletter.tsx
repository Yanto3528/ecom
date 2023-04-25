import { Button, Input } from '@/components/ui';

export default function Newsletter() {
  return (
    <section className="container flex justify-center py-20">
      <div className="max-w-[40rem] text-center">
        <h3 className="mb-2">Subscribe to our newsletter</h3>
        <p className="mb-6 text-sm text-gray-500">
          Subscribe now and receive 20% off discount code to use on checkout
        </p>
        <div className="flex items-center gap-4">
          <Input placeholder="Your email address" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
