'use client';
import { dataGridColumnType, DataTable } from '@/components/dataTable';
import { Divider } from '@/components/Divider';
import { useDialog } from '@/hooks/useDialog';

import ProductProvider from '@/contexts/ProductContext';
import productsApi from '@/utils/services/api/requests/products';
import { Product } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { FiPlus } from 'react-icons/fi';
import { CardProduct } from './cardProduct';
import { FormProduct } from './form/FormProduct';

const columns: Array<dataGridColumnType> = [
  { uniqueId: 'id', key: 'id', label: 'ID', filter: true, className: 'w-20',filterType: 'text', },
  { uniqueId: 'name', key: 'name', label: 'Nome', filter: true,filterType: 'text', },
  { uniqueId: 'category', key: 'category', label: 'Categoria', filter: true,filterType: 'text', },
  { uniqueId: 'price', key: 'price', label: 'Preço', filter: true,filterType: 'range',className: 'w-[20%] min-w-[15vw]' },
];
export default function Products() {
  const { displayDialog, removeDialog } = useDialog();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['products-all'],
    queryFn: () => productsApi.getItems(),
    staleTime: 60000,
  });
  function handlerAddProduct() {
    displayDialog({
      dialogId: 'DIALOG-ADD',
      content: (
        <FormProduct
          onClose={() => removeDialog('DIALOG-ADD')}
          refetch={refetch}
        />
      ),
    });
  }
  function handlerDetail(item: Product) {
    displayDialog({
      dialogId: 'SIDE-MENU',
      content: <CardProduct {...item} refetch={refetch} />,
    });
  }
  if (isLoading) return <p>Loading...</p>;
  return (
    <ProductProvider>
      <section>
        <div className='flex w-full justify-end pb-2'>
          <button
            onClick={handlerAddProduct}
            className='bg-primary cursor-pointer flex items-center gap-1 bg-primary-arp hover:bg-primary-hover-arp px-3 py-1.5 rounded-md text-white font-semibold capitalize'
          >
            <FiPlus size={20} />
            add
          </button>
        </div>

        <Divider className={'border-gray-300 pb-4'} />
        <DataTable
          columns={columns}
          data={data.products || []}
          onRowClick={(row: Product) => handlerDetail(row)}
        />
      </section>
    </ProductProvider>
  );
}
