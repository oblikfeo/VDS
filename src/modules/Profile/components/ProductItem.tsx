import React from 'react';
import styled from 'styled-components';

import { formatSum } from '../../../common/utils';
import { Typography } from '../../../ui/components';
import { NoImage } from '../../../ui/icons';
import { ProductType } from '../types';

type Props = {
  product: ProductType;
};

const ProductWrapper = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.indents.xl};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ProductImageContainer = styled.div`
  height: 68px;
  width: 68px;
  margin-right: ${({ theme }) => theme.indents.m};
`;

const ProductImage = styled.img`
  min-width: 68px;
  max-width: 68px;
`;

const Description = styled(Typography)`
  margin-top: ${({ theme }) => theme.indents.xxs};
`;

const InfoContainer = styled.div``;

export const ProductItem = ({ product }: Props) => {
  const { name, image, quantity, total } = product;

  const formattedSum = total ? formatSum(total) : '0';

  const quantityAndPriceDescription = `Количество: ${quantity} шт на сумму ${formattedSum}`;

  return (
    <ProductWrapper>
      <ProductImageContainer>{image ? <ProductImage src={image} /> : <NoImage />}</ProductImageContainer>
      <InfoContainer>
        <Typography tag="div">{name}</Typography>
        <Description tag="div" variant="mini2" color="tertiary">
          {quantityAndPriceDescription}
        </Description>
      </InfoContainer>
    </ProductWrapper>
  );
};
