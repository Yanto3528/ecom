export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: {
    url: string;
    alt: string;
  }[];
  quantity: number;
  category: string;
}
