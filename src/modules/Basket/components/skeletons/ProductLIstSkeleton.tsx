import React from 'react';

import { ProductSkeleton } from './ProductSkeleton';

export const ProductLIstSkeleton = () => (
  <>
    {[...Array(3)].map((item) => (
      <ProductSkeleton key={item} />
    ))}
  </>
);
