import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import { ProductItem } from './ProductItem';
import { formatSum } from '../../../common/utils';
import { Card } from '../../../ui/components';
import { OrderType } from '../types';

type Props = {
  order: OrderType;
};

const TopLine = styled.div`
  margin-left: ${({ theme }) => theme.indents.m};
  margin-bottom: ${({ theme }) => theme.indents.xxs};
  ${({ theme }) => theme.typography.mini2};
  display: flex;
`;

const OrderWrapper = styled.div`
  margin-top: ${({ theme }) => theme.indents.m};
`;

const StatusLine = styled.div`
  ${({ theme }) => theme.typography.mini2}
  display: flex;
  justify-content: flex-end;
`;

const TotalLine = styled.div`
  ${({ theme }) => theme.typography.body3}
  display: flex;
  justify-content: flex-end;
`;

const ProductsContainer = styled.div``;

export const OrderItem = ({ order }: Props) => {
  const { dateAdded, status, id, products, total } = order;

  const formattedDate = format(new Date(dateAdded), 'dd.MM.yyyy HH:mm');

  const title = `Заказ №${id} от ${formattedDate}`;

  const formattedSum = total ? formatSum(total) : '0';

  return (
    <OrderWrapper>
      <TopLine>{title}</TopLine>
      <Card>
        <StatusLine>Статус: {status}</StatusLine>
        <ProductsContainer>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ProductsContainer>
        <TotalLine>Итого: {formattedSum}</TotalLine>
      </Card>
    </OrderWrapper>
  );
};
