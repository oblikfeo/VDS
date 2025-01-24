import { FormikProps } from 'formik';
import React, { Ref } from 'react';
import styled from 'styled-components';

import { OrderPolicy } from './OrderPolicy';
import { formatSum } from '../../../common/utils';
import { adaptive, Button, Card } from '../../../ui/components';
import { BasketProduct } from '../../Basket';
import { OrderFormValuesType } from '../types';

type Props = {
  total?: number;
  products: BasketProduct[];
  formRef: Ref<FormikProps<OrderFormValuesType>> | undefined;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SumContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.xs};
`;

const ProductsContainer = styled(Card)`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const ProductContainer = styled.div`
  ${({ theme }) => theme.typography.mini1}
  margin-bottom: ${({ theme }) => theme.indents.xs};

  :last-child {
    margin-bottom: 0;
  }
`;

const StyledOrderPolicyContainer = styled.div`
  ${adaptive.minWidth.desktopS} {
    display: none;
  }
`;

export const OrderTotal = ({ total, products, formRef }: Props) => {
  const totalSum = total ? formatSum(total) : 0;

  const handleClick = () => {
    // @ts-ignore
    formRef?.current?.submitForm?.();
  };

  return (
    <Container>
      <ProductsContainer>
        {products.map(({ id, name }) => (
          <ProductContainer key={id}>{name}</ProductContainer>
        ))}
      </ProductsContainer>
      <Card>
        <SumContainer>Сумма к оплате: {totalSum}</SumContainer>
        <Button.Contained onClick={handleClick} isFluid secondary>
          Оформить заказ
        </Button.Contained>
      </Card>
      <StyledOrderPolicyContainer>
        <OrderPolicy />
      </StyledOrderPolicyContainer>
    </Container>
  );
};
