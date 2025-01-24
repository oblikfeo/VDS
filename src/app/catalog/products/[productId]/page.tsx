import { notFound } from 'next/navigation';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { CAROUSEL_TYPE } from '@modules/Catalog';
import { getProductCarouselDataRequest, getProductDataRequest } from '@modules/Catalog/services/requests';

import { CatalogProductPage } from './catalogProductPage';

export async function generateMetadata({ params }: { params: { productId: string } }) {
  const productInitialData = await getProductDataRequest(Number(params.productId));

  return {
    title: `${productInitialData?.name || ''} | ${DEFAULT_METADATA_TITLE}` || '',
    description: productInitialData?.description || '',
  };
}

export default async function Page({ params }: { params: { productId: string } }) {
  const productInitialData = await getProductDataRequest(Number(params.productId));
  const productViewCarouselInitialData = await getProductCarouselDataRequest(CAROUSEL_TYPE.VIEW);

  if (!productInitialData?.id) return notFound();

  return (
    <CatalogProductPage carouselInitialData={productViewCarouselInitialData} productInitialData={productInitialData} />
  );
}
