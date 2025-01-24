'use client';

import React from 'react';

import { ProductsTypeResponse } from '@modules/Catalog/types';

import { Slider } from '../../../ui/components';
import { useProductActions } from '../../Catalog/hooks';
import { Slide, SlideSkeleton } from '../components';
import { useHitsSliderData } from '../hooks';

type Props = {
  initialData?: ProductsTypeResponse;
};

export const MainHitsSlider = ({ initialData }: Props) => {
  const { list, isLoading } = useHitsSliderData(initialData);
  const { handleClickCard } = useProductActions();

  if (isLoading) return <SlideSkeleton />;

  return (
    <Slider
      enableAuto={false}
      slides={list.map((product) => (
        <Slide key={product.id} product={product} onClick={handleClickCard} />
      ))}
    />
  );
};
