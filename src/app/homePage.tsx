import React from 'react';

import { MainPageAbout } from '@modules/About';
import { CAROUSEL_TYPE, CatalogCarousel } from '@modules/Catalog';
import { ProductsTypeResponse } from '@modules/Catalog/types';
import { NewsCarousel } from '@modules/News';
import { NewsResponseType } from '@modules/News/types';
import { Container } from '@ui/components';

import { ContentSection } from './styled';

type Props = {
  productNewCarouselInitialData?: ProductsTypeResponse;
  productViewCarouselInitialData?: ProductsTypeResponse;
  newsCarouselInitialData?: NewsResponseType;
};
export const HomePage = ({
  productViewCarouselInitialData,
  productNewCarouselInitialData,
  newsCarouselInitialData,
}: Props) => (
  <Container>
    <ContentSection>
      <NewsCarousel initialData={newsCarouselInitialData} />
    </ContentSection>
    <ContentSection>
      <CatalogCarousel type={CAROUSEL_TYPE.NEW} initialData={productNewCarouselInitialData} />
    </ContentSection>
    <ContentSection>
      <MainPageAbout />
    </ContentSection>
    <ContentSection>
      <CatalogCarousel type={CAROUSEL_TYPE.VIEW} initialData={productViewCarouselInitialData} />
    </ContentSection>
  </Container>
);
