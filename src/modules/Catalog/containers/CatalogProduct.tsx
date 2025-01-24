import { notFound } from 'next/navigation';
import React from 'react';

import { getCategoriesBreadcrumbs } from '@common/utils/breadcrumbs';

import { CatalogCarousel } from './CatalogCarousel';
import { ContentSection } from '../../../app/styled';
import { Breadcrumbs } from '../../../ui/components/Breadcrumbs';
import { CAROUSEL_TYPE } from '../constants';
import { useProduct, useProductActions } from '../hooks';
import { ProductDetail } from '../modules/product';
import { ProductsTypeResponse, ProductType } from '../types';

type Props = {
  productId: number;
  productInitialData: ProductType;
  carouselInitialData?: ProductsTypeResponse;
};

const getBreadcrumbItem = (product: ProductType) => ({ path: `/catalog/products/${product.id}`, label: product.name });

export const CatalogProduct = ({ productId, productInitialData, carouselInitialData }: Props) => {
  const { product, isLoading, isError } = useProduct(productId, productInitialData);
  const { handleChangeBasketCount } = useProductActions();

  if (isLoading) return <>LOADING...</>;

  if (isError || !product) return notFound();

  return (
    <>
      <Breadcrumbs items={[...getCategoriesBreadcrumbs(product.breadcrumbs), getBreadcrumbItem(product)]} />
      <ProductDetail product={product} onChangeCount={handleChangeBasketCount} />
      <ContentSection>
        <CatalogCarousel type={CAROUSEL_TYPE.VIEW} initialData={carouselInitialData} />
      </ContentSection>
    </>
  );
};
