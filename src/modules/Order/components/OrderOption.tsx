import { Field } from 'formik';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Card } from '../../../ui/components';

const OrderOptionCard = styled(Card)<{ active: boolean }>`
  padding: ${({ theme }) => theme.indents.m} ${({ theme }) => theme.indents.s};
  cursor: pointer;
  height: 92px;
  border: 1px solid ${({ theme, active }) => (active ? theme.color.buttons.textActive : theme.color.background.main)};

  :hover {
    border-color: ${({ theme }) => theme.color.buttons.textHover};
  }
`;

type Props = {
  active: boolean;
  children: ReactNode;
  name: string;
  value: string;
};

const HiddenField = styled(Field)`
  display: none;
`;

export const OrderOption = ({ active, children, name, value }: Props) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label>
    <HiddenField type="radio" name={name} value={value} />
    <OrderOptionCard active={active}>{children}</OrderOptionCard>
  </label>
);
