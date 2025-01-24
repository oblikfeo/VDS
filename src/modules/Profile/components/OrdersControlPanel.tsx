'use client';

import React from 'react';
import styled from 'styled-components';

import { Card } from '../../../ui/components';

const ControlCard = styled(Card).attrs({ mini: true })`
  ${({ theme }) => theme.typography.mini2};
  display: flex;
`;

const Wrapper = styled.div`
  display: flex;
`;
export const OrdersControlPanel = () => (
  <Wrapper>
    <ControlCard>Все заказы</ControlCard>
  </Wrapper>
);
