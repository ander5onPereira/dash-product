import { useContext } from 'react';
import { ProductContext } from '@/contexts/ProductContext';

export function useProduct() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProduct deve ser usado dentro de ProductProvider');
  }
  return context;
}
