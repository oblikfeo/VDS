export type BasketProduct = {
  id: number;
  productId: number;
  name: string;
  model: string;
  option: string[];
  quantity: number;
  availableQuantity: number;
  price: number;
  total: number;
  image?: string;
  notAvailable: boolean;
  forOrder: boolean;
  currency: string;
};

export type BasketListResponse = {
  products: BasketProduct[];
  basket: {
    total: number;
  };
};
