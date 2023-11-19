import { Category } from "../category/category";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  category: Category
}
