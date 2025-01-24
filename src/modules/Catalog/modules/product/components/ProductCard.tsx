'use client';

import React, { useEffect, useState } from 'react';

import { formatSum } from '../../../../../common/utils';
import { ProductCard as ProductCardUI, ProductCardLine as ProductCardLineUI } from '../../../../../ui/components';
import { VIEW_MODE } from '../../../constants';
import { ProductType, ViewModeType } from '../../../types';

type Props = {
  product: ProductType;
  mode?: ViewModeType;
  onChangeCount: (id: number, count: number) => Promise<void>;
  onChangeFavourite: (id: number, value: boolean) => Promise<void>;
  onChangeCompare: (id: number, value: boolean) => Promise<void>;
  getProductLink: (id: number) => string;
};

export const ProductCard = ({
  product,
  mode = VIEW_MODE.grid,
  onChangeCount,
  onChangeFavourite,
  onChangeCompare,
  getProductLink,
}: Props) => {
  const { image, name, price, discount, special, notAvailable, forOrder, id, basketQuantity } = product;

  const [count, setCount] = useState(basketQuantity ?? 0);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (basketQuantity && basketQuantity !== count) setCount(basketQuantity ?? 0);
  }, [basketQuantity]);

  const priceString = price ? formatSum(special || discount || price) : undefined;
  const oldPriceString = priceString && (special || discount) ? formatSum(price) : undefined;

  const onChangeCountHandler = (newCount: number) => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCount(product.id, newCount).finally(() => setIsLoading(false));
      setCount(newCount);
    }
  };

  const onChangeFavouriteHandler = () => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeFavourite(product.id, !isFavourite).finally(() => setIsLoading(false));
      setIsFavourite(!isFavourite);
    }
  };

  const onChangeCompareHandler = () => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCompare(product.id, !isCompare).finally(() => setIsLoading(false));
      setIsCompare(!isCompare);
    }
  };

  const productLink = getProductLink(id);

  if (mode === VIEW_MODE.grid)
    return (
      <ProductCardUI
        productLink={productLink}
        name={name}
        image={image}
        price={priceString}
        oldPrice={oldPriceString}
        isCompare={isCompare}
        isFavourite={isFavourite}
        notAvailable={notAvailable}
        countInBasket={count}
        forOrder={forOrder}
        onChangeCount={onChangeCountHandler}
        onChangeFavourite={onChangeFavouriteHandler}
        onChangeCompare={onChangeCompareHandler}
        isLoading={isLoading}
      />
    );

  return (
    <ProductCardLineUI
      name={name}
      image={image}
      price={priceString}
      oldPrice={oldPriceString}
      isCompare={isCompare}
      isFavourite={isFavourite}
      notAvailable={notAvailable}
      countInBasket={count}
      forOrder={forOrder}
      onChangeCount={onChangeCountHandler}
      onChangeFavourite={onChangeFavouriteHandler}
      onChangeCompare={onChangeCompareHandler}
      productLink={productLink}
      isLoading={isLoading}
    />
  );
};
