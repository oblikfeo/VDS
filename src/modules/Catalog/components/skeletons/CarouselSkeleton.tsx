import React from 'react';

import { ProductCardSkeleton } from './ProductCardSkeleton';
import { Col } from '../../../../ui/components';

export const CarouselSkeleton = () => (
  <>
    {[...Array(5)].map((_item, index) => (
      <Col key={index} mobile={8} tablet={4} desktopS={3}>
        <ProductCardSkeleton />
      </Col>
    ))}
  </>
);
