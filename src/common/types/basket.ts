export type BasketProductsQuantityType = Record<number, { quantity: number; cartId: number }>;

export type BasketProductsQuantityResponseType = {
  products?: BasketProductsQuantityType;
};
