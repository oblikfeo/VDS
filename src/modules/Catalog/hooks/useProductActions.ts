import { useRouter } from 'next/navigation';

import { useBasket } from '../../../common/hooks';

export const useProductActions = () => {
  const router = useRouter();
  const { addProduct, editProduct, removeProduct, products, isLoading } = useBasket();

  const handleClickCard = (id: number) => {
    router.push(`/catalog/products/${id}`);
  };

  const getProductLink = (id: number) => `/catalog/products/${id}`;

  const handleChangeBasketCount = (id: number, quantity: number): Promise<void> => {
    if (products[id]) {
      if (!quantity) return removeProduct(products[id].cartId);

      return editProduct(products[id].cartId, quantity);
    }

    return addProduct(id, quantity);
  };

  const handleChangeFavourite = (id: number, value: boolean): Promise<void> => {
    console.log(id, value);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  const handleChangeCompare = (id: number, value: boolean): Promise<void> => {
    console.log(id, value);
    return new Promise<void>((resolve) => {
      resolve();
    });
  };

  return {
    handleChangeCompare,
    handleChangeFavourite,
    handleChangeBasketCount,
    handleClickCard,
    getProductLink,
    isLoading,
  };
};
