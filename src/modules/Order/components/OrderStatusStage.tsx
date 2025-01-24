import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../../../layouts/Lampastar';
import { Button, Typography } from '../../../ui/components';
import { CreateOrderData } from '../types';

type Props = {
  resetStage: () => void;
  orderData?: CreateOrderData;
  showLCInfo?: boolean;
};

const MyOrdersButton = styled(Button.Contained)`
  margin-top: ${({ theme }) => theme.indents.m};
`;

const GoHomeButton = styled(Button.Text)`
  margin-top: ${({ theme }) => theme.indents.l};
`;

export const OrderStatusStage = ({ resetStage, orderData, showLCInfo }: Props) => {
  const router = useRouter();

  const { id } = orderData || {};

  useEffect(() => {
    if (!id) resetStage();
  }, [id, resetStage]);

  const titleNumber = `Ваш заказ №${id}`;
  const titleStatus = <Typography status="success"> — оформлен. Спасибо за покупку!</Typography>;

  const goHome = () => router.push('/');
  const goMyOrders = () => router.push('/profile/orders');

  return (
    <>
      <PageTitle>
        {titleNumber}
        {titleStatus}
      </PageTitle>
      <Typography variant="body4">
        {showLCInfo ? (
          <>Все заказы вы можете отслеживать в вашем Личном кабинете.</>
        ) : (
          <>Детали заказа отправлены вам на почту указанную при заказе</>
        )}
      </Typography>
      <MyOrdersButton onClick={goMyOrders}>Мои заказы</MyOrdersButton>
      <GoHomeButton secondary onClick={goHome}>
        Назад на главную
      </GoHomeButton>
    </>
  );
};
