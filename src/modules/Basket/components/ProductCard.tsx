'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { formatSum } from '../../../common/utils';
import { ProductCardBasket } from '../../../ui/components';
import { BasketProduct } from '../types';

type Props = {
  product: BasketProduct;
  onChangeCount: (id: number, count: number) => Promise<void>;
  onChangeFavourite: (id: number, value: boolean) => Promise<void>;
  onChangeCompare: (id: number, value: boolean) => Promise<void>;
  onClickCard: (id: number) => void;
};

const ProductBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;
export const ProductCard = ({ product, onClickCard, onChangeCompare, onChangeCount, onChangeFavourite }: Props) => {
  const { image, name, price, total, notAvailable, forOrder, productId, quantity, availableQuantity } = product;

  const [count, setCount] = useState(quantity ?? 0);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isCompare, setIsCompare] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (quantity && quantity !== count) setCount(quantity ?? 0);
  }, [quantity]);

  const priceString = price ? formatSum(price) : undefined;
  const totalPriceString = priceString && formatSum(total);

  const onChangeCountHandler = (newCount: number) => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCount(product.productId, newCount).finally(() => setIsLoading(false));
      setCount(newCount);
    }
  };

  const onClickDeleteHandler = () => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCount(product.productId, 0).finally(() => setIsLoading(false));
      setCount(0);
    }
  };

  const onChangeFavouriteHandler = () => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeFavourite(product.productId, !isFavourite).finally(() => setIsLoading(false));
      setIsFavourite(!isFavourite);
    }
  };

  const onChangeCompareHandler = () => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCompare(product.productId, !isCompare).finally(() => setIsLoading(false));
      setIsCompare(!isCompare);
    }
  };

  const onClickCardHandler = () => {
    onClickCard(productId);
  };

  const partAvailable = quantity > availableQuantity && availableQuantity > 0;

  return (
    <ProductBlock>
      <ProductCardBasket
        name={name}
        image={image}
        price={priceString}
        totalPrice={totalPriceString}
        isCompare={isCompare}
        isFavourite={isFavourite}
        notAvailable={notAvailable}
        partAvailable={partAvailable}
        countInBasket={count}
        forOrder={forOrder}
        onChangeCount={onChangeCountHandler}
        onChangeFavourite={onChangeFavouriteHandler}
        onChangeCompare={onChangeCompareHandler}
        onClickCard={onClickCardHandler}
        onClickDelete={onClickDeleteHandler}
        isLoading={isLoading}
      />
    </ProductBlock>
  );
};
