import { Card } from '@/components/dialog/card';
import { useDialog } from '@/hooks/useDialog';
import { toastError } from '@/utils/function/notifications';
import productsApi from '@/utils/services/api/requests/products';
import { Product } from '@prisma/client';
import { useState } from 'react';

const newData: Partial<Product> = {
  imageUrl: '',
  name: '',
  price: 0,
  description: '',
};
interface Props {
  onClose: Function;
  initialData?: Partial<Product>;
  refetch: Function;
}
export function FormProduct({ onClose, initialData, refetch }: Props) {
  const [formData, setFormData] = useState(initialData || newData);
  const { displayDialog } = useDialog();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    productsApi.submitForm({
      data: formData,
      successCallBack: () => {
        refetch();
        setFormData(newData);
        onClose();
      },
      errorCallBack: () => {
        toastError(<span>Error</span>);
      },
    });
  };
  function updateField(fieldName: string, value: any) {
    setFormData((prevItem) => ({ ...prevItem, [fieldName]: value }));
  }
  function handlerViewImage() {
    displayDialog({
      dialogId: 'VIEW_IMAGE',
      content: (
        <Card className={' flex items-center justify-center w-full h-full'}>
          <img src={`${formData?.imageUrl}`} alt='imagem' />
        </Card>
      ),
    });
  }
  console.log({ formData });
  return (
    <Card className={'w-[50dvw] '}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Name
        </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          category
        </label>
        <input
          type='text'
          name='category'
          value={formData.category}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Price
        </label>
        <input
          type='number'
          name='price'
          value={formData.price}
          onChange={({ target }) => {
            updateField(target.name, Number(target.value));
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          ImageUrl
        </label>
        <input
          type='text'
          name='imageUrl'
          value={formData.imageUrl}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-1'
        />
        <div hidden={!formData?.imageUrl} className='mb-3'>
          <button
            type='button'
            onClick={handlerViewImage}
            className='underline'
          >
            Ver image
          </button>
        </div>

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Description
        </label>
        <textarea
          value={formData.description}
          name='description'
          onChange={({ target }) => updateField(target.name, target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4 resize-y min-h-[100px]'
        />

        <div>
          <button
            type='submit'
            disabled={
              !formData.name ||
              !formData.category ||
              !formData.price ||
              !formData.imageUrl ||
              !formData.description
            }
            className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed'
          >
            enviar
          </button>
        </div>
      </form>
    </Card>
  );
}
