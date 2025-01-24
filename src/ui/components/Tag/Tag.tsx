import React from 'react';
import styled from 'styled-components';

const BaseTag = styled.div`
  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0 8px;
`;

const TagNew = styled(({ className }: { className?: string }) => <BaseTag className={className}>Новинка</BaseTag>)`
  border-color: ${({ theme }) => theme.color.tags.new};
  color: ${({ theme }) => theme.color.tags.new};
`;

const TagSale = styled(({ className }: { className?: string }) => <BaseTag className={className}>Распродажа</BaseTag>)`
  border-color: ${({ theme }) => theme.color.tags.sale};
  background-color: ${({ theme }) => theme.color.tags.sale};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const Tag = {
  New: TagNew,
  Sale: TagSale,
};
