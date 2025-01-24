'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import { CatalogProduct as CatalogProductComponent } from '@modules/Catalog';
import { ProductsTypeResponse, ProductType } from '@modules/Catalog/types';

type Props = {
  productInitialData: ProductType;
  carouselInitialData?: ProductsTypeResponse;
};

export const CatalogProductPage = ({ productInitialData, carouselInitialData }: Props) => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <CatalogProductComponent
      productId={Number(productId || 0)}
      productInitialData={productInitialData}
      carouselInitialData={carouselInitialData}
    />
  );
};
