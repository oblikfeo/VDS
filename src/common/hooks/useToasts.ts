import { useContext } from 'react';
import { v4 as uuid4 } from 'uuid';

import { ToastsContext } from '../context';
import { ToastType } from '../types';

export const useToasts = () => {
  const { addToast, toasts, removeToast } = useContext(ToastsContext) || {};

  const addToastWithID = (toast: Omit<ToastType, 'id'>) => {
    addToast?.({ ...toast, id: uuid4() });
  };

  const removerToastById = (id: string) => {
    removeToast?.(id);
  };

  return { addToast: addToastWithID, toasts, removeToast: removerToastById };
};
