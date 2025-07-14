import DialogContext from '@/contexts/DialogContext';
import { useContext } from 'react';


export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog deve ser usado dentro de DialogProvider');
  }
  return context;
}
