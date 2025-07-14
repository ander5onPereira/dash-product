'use client';
import { useProductStore } from '@/store/useProductStore';
import { Product } from '@prisma/client';
import { createContext, useEffect } from 'react';

export const ProductContext = createContext({
  isLoading: false,
  data: Array<Product>(),
  refetch: () => {},
});
interface Props {
  children: React.ReactNode;
}
export default function ProductProvider({ children }: Props) {
  const { products, isLoading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider
      value={{ data: products, isLoading, refetch: fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
