import { useContext } from 'react';
import { DataGridContext } from '..';
import { twMerge } from 'tailwind-merge';
import { getObjectData } from '../utils';

export function TbBody() {
  const { paginatedData, columns, onRowClick } = useContext(DataGridContext);
  return (
    <tbody>
      {paginatedData.map((row, index) => (
        <tr
          key={index}
          data-bg={Boolean(index % 2)}
          className='data-[bg=true]:bg-gray-50 hover:bg-gray-100'
        >
          {columns.map((col) => {
            const value = row[`${col.key}`];
            return (
              <td
                onClick={() =>
                  col.avoidRowClick ? null : onRowClick && onRowClick(row)
                }
                key={col.uniqueId}
                className={twMerge(
                  'p-2',
                  col?.avoidRowClick
                    ? 'cursor-default'
                    : onRowClick
                    ? 'cursor-pointer'
                    : 'cursor-default'
                )}
              >
                {col.render ? col.render(value, row) : row[col.key]}
              </td>
            );
          })}
        </tr>
      ))}
      {paginatedData.length === 0 && (
        <tr>
          <td colSpan={columns.length} className='text-center p-4'>
            Nenhum resultado encontrado.
          </td>
        </tr>
      )}
    </tbody>
  );
}
