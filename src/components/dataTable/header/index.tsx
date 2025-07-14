import { useContext } from 'react';
import { DataGridContext } from '..';
import { twMerge } from 'tailwind-merge';
import { FaSortAmountUp } from 'react-icons/fa';
import { FaSortDown, FaSortUp } from 'react-icons/fa6';

export function TbHeader() {
  const { columns, setFilters, filters, setSortState, sortState } =
    useContext(DataGridContext);
  const handleSort = (key: string) => {
    setSortState((prev: { [key: string]: string }) => {
      const current = prev[key];

      // Alterna entre asc, desc, e nenhum
      if (current === 'asc') return { [key]: 'desc' };
      if (current === 'desc') return {}; // remove a ordenação
      return { [key]: 'asc' }; // nova ordenação
    });
  };
  return (
    <thead>
      <tr className='bg-header-table rounded-t-md'>
        {columns.map((col) => (
          <th
            key={col.uniqueId}
            className={twMerge('pt-2 pb-2 px-0.5', col.className)}
          >
            <div className='flex flex-col'>
              <button
                onClick={() => handleSort(col.key)}
                className='flex items-center text-xs pl-1 gap-1 w-full text-left cursor-pointer'
              >
                {col.label}
                {sortState[col.key] === 'asc' && <FaSortUp />}
                {sortState[col.key] === 'desc' && <FaSortDown />}
                {!sortState[col.key] && (
                  <FaSortAmountUp className='opacity-40' />
                )}
              </button>

              {/* Filtros */}
              {col.filter && col.filterType === 'range' ? (
                <div className='flex gap-1 mt-1'>
                  <input
                    type='number'
                    placeholder='Mín'
                    value={filters[`${col.key}_min`] || ''}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        [`${col.key}_min`]: e.target.value,
                      }))
                    }
                    className='font-normal text-sm h-7.5 bg-input rounded-md focus:outline-none border-1.5 focus:border-primary-arp px-2 w-full bg-gray-100 '
                  />
                  <input
                    type='number'
                    placeholder='Máx'
                    value={filters[`${col.key}_max`] || ''}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        [`${col.key}_max`]: e.target.value,
                      }))
                    }
                    className='font-normal text-sm h-7.5 bg-input rounded-md focus:outline-none border-1.5 focus:border-primary-arp px-2 w-full bg-gray-100 '
                  />
                </div>
              ) : col.filter ? (
                <input
                  type='text'
                  placeholder={`${col.label}`}
                  value={filters[col.key] || ''}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      [col.key]: e.target.value,
                    }))
                  }
                  className='font-normal text-sm h-8 bg-input rounded-md focus:outline-none border-1.5 focus:border-primary-arp px-2 w-full bg-gray-100'
                />
              ) : null}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}
