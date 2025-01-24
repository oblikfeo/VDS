import React from 'react';

import { ProductCardProps } from './ProductCard';
import { ProductCardActionsSkeleton } from './ProductCardActionsSkeleton';
import {
  ActualPrice,
  NameContainer,
  OldPrice,
  PriceContainer,
  StyledCardLine,
  LeftBlock,
  InfoBlock,
  ImageBoxLine,
  AdditionalButton,
  LikeActive,
  PropertiesContainer,
  ActionsBlock,
  RightBlockCart,
} from './styled';
import { USE_COMPARE, USE_FAVORITES, USE_ORDER, useFeature } from '../../../common/featureToggles';
import { Compare, Like, NoImage } from '../../icons';
import { ButtonContained } from '../Button';
import { Counter } from '../Counter';

export const ProductCardLine = ({
  name,
  image,
  price,
  oldPrice,
  isFavourite,
  isCompare,
  notAvailable,
  countInBasket,
  forOrder,
  onChangeCount,
  onChangeFavourite,
  onChangeCompare,
  productLink,
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
    console.log(productLink);
  };

  const showCounter = enableOrderFeature && countInBasket && !notAvailable && !forOrder;

  const renderActions = () => (
    <>
      {enableCompareFeature && (
        <AdditionalButton active={isCompare} onClick={onChangeCompare}>
          <Compare />
        </AdditionalButton>
      )}
      {enableFavoriteFeature && (
        <AdditionalButton active={isFavourite} onClick={onChangeFavourite}>
          {isFavourite ? <LikeActive /> : <Like />}
        </AdditionalButton>
      )}
    </>
  );

  const render2BasketActions = () => {
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
    <StyledCardLine height={204}>
      <LeftBlock>
        <ImageBoxLine>{image ? <img alt={name} src={`${image}`} /> : <NoImage />}</ImageBoxLine>
      </LeftBlock>
      <InfoBlock>
        <NameContainer row={1}>{name}</NameContainer>
        <PropertiesContainer />
        <ActionsBlock>{renderActions()}</ActionsBlock>
      </InfoBlock>
      <RightBlockCart>
        <PriceContainer>
          {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
          <ActualPrice>{price}</ActualPrice>
        </PriceContainer>
        {render2BasketActions()}
      </RightBlockCart>
    </StyledCardLine>
  );
};
