import { Metadata } from 'next';
import React from 'react';

import { DEFAULT_METADATA_TITLE } from '@common/constants';
import { CAROUSEL_TYPE } from '@modules/Catalog';
import { getProductCarouselDataRequest } from '@modules/Catalog/services/requests';
import { getMainHitsSliderDataRequest } from '@modules/MainHitsSlider/services/requests';
import { getPromoSliderDataRequest } from '@modules/MainPromoSlider/services/request';
import { getNewsCarouselDataRequest } from '@modules/News/services/requests';

import { HomePage } from './homePage';

export const metadata: Metadata = {
  title: `Главная | ${DEFAULT_METADATA_TITLE}`,
  description: `Главная страница | ${DEFAULT_METADATA_TITLE}`,
};

export default async function Page() {
  const mainPromoSliderInitialData = await getPromoSliderDataRequest();
  const mainHitsSliderInitialData = await getMainHitsSliderDataRequest();
  const productBuyCarouselInitialData = await getProductCarouselDataRequest(CAROUSEL_TYPE.BUY);
  const productNewCarouselInitialData = await getProductCarouselDataRequest(CAROUSEL_TYPE.NEW);
  const productViewCarouselInitialData = await getProductCarouselDataRequest(CAROUSEL_TYPE.VIEW);
  const newsCarouselInitialData = await getNewsCarouselDataRequest();

  return (
    <HomePage
      mainPromoSliderInitialData={mainPromoSliderInitialData}
      mainHitsSliderInitialData={mainHitsSliderInitialData}
      productBuyCarouselInitialData={productBuyCarouselInitialData}
      productNewCarouselInitialData={productNewCarouselInitialData}
      productViewCarouselInitialData={productViewCarouselInitialData}
      newsCarouselInitialData={newsCarouselInitialData}
    />
  );
}
