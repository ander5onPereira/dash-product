import { useContext } from 'react';
import { DataGridContext } from '..';
import { MdArrowBackIosNew, MdArrowForwardIos, MdNavigateNext } from 'react-icons/md';

export function TbFooter() {
  const {
    itemsPerPage,
    setItemsPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
  } = useContext(DataGridContext);
  return (

    <div className='flex justify-between items-center pt-4'>
      {/* Seleção de Itens por Página */}
      <div className='flex gap-1 items-center'>
      <span>Total/Page</span>
      <select
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
        // className='border p-2 rounded'
        className='h-10 bg-white rounded-md focus:outline-none border-2 focus:border-b-2 focus:border-x-2 focus:border-t-2 focus:border-x-violet-200 focus:border-t-violet-200 focus:border-primary-arp px-2 w-full'
      >
        
        {[5, 10, 20, 50].map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      </div>

      {/* Paginação */}
      <div className='flex space-x-2 items-center'>
        <button
          className='border p-2 rounded disabled:opacity-50'
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev: number) => prev - 1)}
        >
         <MdArrowBackIosNew />
        </button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <button
          className='border p-2 rounded disabled:opacity-50'
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>

  );
}
