import { products } from "@/mock-data/products";

import { ProductImages } from "./components";

interface ProductDetailProps {
  params: { id: string };
}

function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return null;
  }

  return (
    <main className="container flex justify-between gap-10 items-start">
      <ProductImages images={product.images} />
      <div className="flex-1">
        <span className="text-gray-500">{product.category}</span>
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
        <p>{product.description}</p>
        <p className="font-bold text-2xl mt-8">${product.price}</p>
        <div className="my-4">
          <label htmlFor="quantity" className="block mb-2">
            Quantity{" "}
            {product.quantity <= 0 && (
              <span className="text-red-500 font-bold">Out of stock</span>
            )}
          </label>
          <input
            type="number"
            placeholder="Select quantity"
            className="px-4 py-2 w-full disabled:cursor-not-allowed"
            min={1}
            max={product.quantity}
            disabled={product.quantity <= 0}
          />
        </div>
        <button
          className="bg-black text-white px-6 py-2 rounded-md font-semibold enabled:hover:bg-gray-800 w-full disabled:opacity-70 disabled:cursor-not-allowed"
          disabled={product.quantity <= 0}
        >
          Add to cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetail;
