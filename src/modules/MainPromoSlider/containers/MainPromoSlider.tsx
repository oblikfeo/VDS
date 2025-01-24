'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Slider } from '../../../ui/components';
import { Slide, SlideSkeleton } from '../components';
import { promoSliderEnum } from '../constants';
import { usePromoSliderData } from '../hooks';

const getElementFilter = (type: promoSliderEnum, categoryId?: number, productId?: number, filter?: string) => {
  switch (type) {
    case promoSliderEnum.CATEGORY:
      return categoryId;
    case promoSliderEnum.PRODUCT:
      return productId;
    case promoSliderEnum.FILTER:
      return filter;
    default:
      return productId;
  }
};

type Props = {
  initialData: any;
};

export const MainPromoSlider = ({ initialData }: Props) => {
  const router = useRouter();

  const { slides, isLoading } = usePromoSliderData(initialData);

  const handleOnClick = (type: promoSliderEnum, filter?: number | string) => {
    switch (type) {
      case promoSliderEnum.CATEGORY:
        return router.push(`/catalog/${filter}/1`);
      case promoSliderEnum.PRODUCT:
        return router.push(`/catalog/products/${filter}`);
      case promoSliderEnum.FILTER:
        // return router.push({ pathname: '/catalog', search: filter as string });
        return '';
      default:
        return router.push(`/catalog/${filter}/1`);
    }
  };

  if (isLoading) return <SlideSkeleton />;

  return (
    <Slider
      slides={slides.map(
        ({
          type,
          backgroundColor,
          textColor,
          id,
          bannerText,
          buttonText,
          image,
          categoryId,
          productId,
          filter,
          price,
        }) => (
          <Slide
            key={id}
            onClick={handleOnClick}
            type={type}
            elementFilter={getElementFilter(type, categoryId, productId, filter)}
            backgroundColor={backgroundColor}
            textColor={textColor}
            text={bannerText}
            price={price}
            minPrice={!!price && type === promoSliderEnum.CATEGORY}
            buttonText={buttonText}
            image={image}
          />
        ),
      )}
    />
  );
};
