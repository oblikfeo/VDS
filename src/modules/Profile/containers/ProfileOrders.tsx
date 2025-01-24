import React from 'react';

import { OrdersControlPanel, OrdersList } from '../components';
import { useOrders } from '../hooks';

export const ProfileOrders = () => {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <>LOADING...</>;

  return (
    <>
      <OrdersControlPanel />
      <OrdersList orders={orders} />
    </>
  );
};
