import React from 'react';

import { ProductCardActionsSkeleton } from './ProductCardActionsSkeleton';
import {
  LikeActive,
  LeftBlock,
  InfoBlock,
  ImageBoxBasket,
  RightBlock,
  BasketTopBlock,
  BasketBottomBlock,
  BasketCounterBlock,
  BasketPriceTotal,
  BasketPrice,
  PriceBasketContainer,
  BasketControlBlock,
  AdditionalBasketButton,
  StyledBasketCardLine,
  BasketNameContainer,
  WarningContainer,
} from './styled';
import { USE_COMPARE, USE_FAVORITES, USE_ORDER, useFeature } from '../../../common/featureToggles';
import { Compare, Delete, Like, NoImage } from '../../icons';
import { ButtonContained } from '../Button';
import { Counter } from '../Counter';

export type ProductCardProps = {
  name: string;
  image?: string;
  price?: string;
  totalPrice?: string;
  isFavourite: boolean;
  isCompare: boolean;
  countInBasket: number;
  notAvailable: boolean;
  partAvailable: boolean;
  forOrder: boolean;
  onChangeCount: (count: number) => void;
  onChangeFavourite: () => void;
  onChangeCompare: () => void;
  onClickCard: () => void;
  onClickDelete: () => void;
  isLoading: boolean;
};

export const ProductCardBasket = ({
  name,
  image,
  price,
  totalPrice,
  isFavourite,
  isCompare,
  notAvailable,
  partAvailable,
  countInBasket,
  forOrder,
  onChangeCount,
  onChangeFavourite,
  onChangeCompare,
  onClickCard,
  onClickDelete,
  isLoading,
}: ProductCardProps) => {
  const enableOrderFeature = useFeature(USE_ORDER);
  const enableFavoriteFeature = useFeature(USE_FAVORITES);
  const enableCompareFeature = useFeature(USE_COMPARE);

  const buttonText =
    (forOrder && 'Под заказ') ||
    (notAvailable && 'Нет в наличии') ||
    (!enableOrderFeature && 'В наличии') ||
    'В корзину';

  const addToBasketHandler = () => {
    onChangeCount(1);
  };

  const onChangeCounter = (count: number) => {
    onChangeCount(count);
  };

  const showCounter = enableOrderFeature && countInBasket && !notAvailable && !forOrder;

  const renderActionsTop = () => {
    if (isLoading) return <ProductCardActionsSkeleton />;

    return (
      <>
        {enableCompareFeature && (
          <AdditionalBasketButton active={isCompare} onClick={onChangeCompare}>
            <Compare />
          </AdditionalBasketButton>
        )}
        {enableFavoriteFeature && (
          <AdditionalBasketButton active={isFavourite} onClick={onChangeFavourite}>
            {isFavourite ? <LikeActive /> : <Like />}
          </AdditionalBasketButton>
        )}

        <AdditionalBasketButton del onClick={onClickDelete}>
          <Delete />
        </AdditionalBasketButton>
      </>
    );
  };

  const renderActionsCount = () => {
    if (isLoading) return <ProductCardActionsSkeleton />;

    if (showCounter) return <Counter value={countInBasket} onChange={onChangeCounter} />;

    return (
      <ButtonContained
        secondary
        isFluid
        disabled={!enableOrderFeature || notAvailable || forOrder}
        onClick={addToBasketHandler}
      >
        {buttonText}
      </ButtonContained>
    );
  };

  return (
    <StyledBasketCardLine>
      <LeftBlock>
        <ImageBoxBasket>{image ? <img alt={name} src={`${image}`} /> : <NoImage />}</ImageBoxBasket>
      </LeftBlock>
      <RightBlock>
        <BasketTopBlock>
          <InfoBlock>
            <BasketNameContainer onClick={onClickCard}>{name}</BasketNameContainer>
          </InfoBlock>
          <BasketControlBlock>{renderActionsTop()}</BasketControlBlock>
        </BasketTopBlock>
        <BasketBottomBlock>
          {partAvailable && (
            <WarningContainer>Количество товара больше доступного в данный момент для заказа</WarningContainer>
          )}
          <PriceBasketContainer>
            {totalPrice && <BasketPriceTotal>{totalPrice}</BasketPriceTotal>}
            {price && (
              <BasketPrice>
                {countInBasket} шт по {price}
              </BasketPrice>
            )}
          </PriceBasketContainer>

          <BasketCounterBlock>{renderActionsCount()}</BasketCounterBlock>
        </BasketBottomBlock>
      </RightBlock>
    </StyledBasketCardLine>
  );
};
