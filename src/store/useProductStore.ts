import productsApi from '@/utils/services/api/requests/products';
import { Product } from '@prisma/client';
import { create } from 'zustand';

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  fetchProducts: () => Promise<void>;
  setProducts: (data: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  isLoading: false,

  setProducts: (data) => set({ products: data }),

  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const data = await productsApi.getItems();
      set({ products: data });
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
