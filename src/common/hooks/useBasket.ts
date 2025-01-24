import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useToasts } from './useToasts';
import { ToastStatusEnum, BasketProductsQuantityResponseType } from '../types';
import { getQueryRequest } from '../utils';

type BasketEditResponseType = {
  success?: string;
  error?: string;
};

type BasketEditRequestType = {
  [p: string]: any;
};

const BASKET_ADD = '/profile/basket/add';
const BASKET_EDIT = '/profile/basket/edit';
const BASKET_REMOVE = '/profile/basket/remove';

export const BASKET_DATA_QUERY_KEY = 'ACTUAL_BASKET_DATA';
const GET_BASKET_DATA_URL = '/profile/basket/quantity';

const addOptions = {
  url: BASKET_ADD,
  method: 'POST',
};

const editOptions = {
  url: BASKET_EDIT,
  method: 'POST',
};

const removeOptions = {
  url: BASKET_REMOVE,
  method: 'POST',
};

const getBasketOptions = {
  url: GET_BASKET_DATA_URL,
};

export const useBasket = () => {
  const queryClient = useQueryClient();

  const { addToast } = useToasts();

  const { data } = useQuery(
    [BASKET_DATA_QUERY_KEY, GET_BASKET_DATA_URL],
    getQueryRequest<BasketProductsQuantityResponseType>(getBasketOptions),
  );

  const { mutateAsync: addProductAsync, isLoading: isLoadingAdd } = useMutation(
    getQueryRequest<BasketEditResponseType, BasketEditRequestType>(addOptions),
  );

  const { mutateAsync: editProductAsync, isLoading: isLoadingEdit } = useMutation(
    getQueryRequest<BasketEditResponseType, BasketEditRequestType>(editOptions),
  );

  const { mutateAsync: removeProductAsync, isLoading: isLoadingRemove } = useMutation(
    getQueryRequest<BasketEditResponseType, BasketEditRequestType>(removeOptions),
  );

  const addProduct = (id: number, quantity = 1) =>
    addProductAsync({ productId: id, quantity })
      .then(() => queryClient.invalidateQueries([BASKET_DATA_QUERY_KEY]))
      .catch(() => addToast({ message: 'Не удалось добавить товар в корзину', status: ToastStatusEnum.ERROR }));

  const editProduct = (id: number, quantity = 1) =>
    editProductAsync({ cartId: id, quantity })
      .then(() => queryClient.invalidateQueries([BASKET_DATA_QUERY_KEY]))
      .catch(() =>
        addToast({ message: 'Не удалось изменить количество товара в корзине', status: ToastStatusEnum.ERROR }),
      );

  const removeProduct = (id: number) =>
    removeProductAsync({ cartId: id })
      .then(() => queryClient.invalidateQueries([BASKET_DATA_QUERY_KEY]))
      .catch(() => addToast({ message: 'Не удалось удалить товар из корзины', status: ToastStatusEnum.ERROR }));

  return {
    addProduct,
    editProduct,
    removeProduct,
    products: data?.products ?? {},
    productsCount: Object.keys(data?.products ?? {}).length,
    isLoading: isLoadingAdd || isLoadingEdit || isLoadingRemove,
  };
};
