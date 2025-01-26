export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "iPhone 15 Pro",
    price: 1499,
    category: "Electronics",
    stock: 50,
  },
  {
    id: "p2",
    name: "Levi's 501 Jeans",
    price: 89.99,
    category: "Fashion",
    stock: 100,
  },
];