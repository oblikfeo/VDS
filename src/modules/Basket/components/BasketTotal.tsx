import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import { formatSum } from '../../../common/utils';
import { Button, Card } from '../../../ui/components';

type Props = {
  total?: number;
  disabled: boolean;
};
const SumContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.xs};
`;
export const BasketTotal = ({ total, disabled }: Props) => {
  const router = useRouter();

  const totalSum = !disabled && total ? formatSum(total) : 0;

  const onClickHandler = () => router.push('/order');

  return (
    <Card>
      <SumContainer>Сумма заказа: {totalSum}</SumContainer>
      <Button.Contained isFluid secondary onClick={onClickHandler} disabled={disabled}>
        Оформить заказ
      </Button.Contained>
    </Card>
  );
};
