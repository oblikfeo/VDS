'use client';

import React from 'react';

import { OrderItem } from './OrderItem';
import { OrderType } from '../types';

type Props = {
  orders: OrderType[];
};
export const OrdersList = ({ orders }: Props) => (
  <>
    {orders.map((order) => (
      <OrderItem key={order.id} order={order} />
    ))}
  </>
);
