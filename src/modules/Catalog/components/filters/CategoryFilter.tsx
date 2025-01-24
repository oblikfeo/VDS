import React from 'react';
import styled from 'styled-components';

import { CheckBox } from '../../../../ui/components';
import { CategoryMap } from '../../types';

type Props = {
  categories: CategoryMap[];
  onChange: (id: number) => void;
  categoryId: number;
};

const StyledList = styled.div`
  ${({ theme }) => theme.typography.mini2};
  padding-left: 5px;
`;

const StyledListItem = styled.div`
  cursor: pointer;
  margin-top: ${({ theme }) => theme.indents.s};
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const renderList = (categories: CategoryMap[], onChange: (id: number) => void, categoryId: number) => (
  <StyledList>
    {categories.map(({ id, name, list }) => (
      <StyledListItem key={id}>
        <CheckBox value={id === categoryId} onChange={() => onChange(id)}>
          {name}
        </CheckBox>
        {!!(list.length && id === categoryId) && <StyledList>{renderList(list, onChange, categoryId)}</StyledList>}
      </StyledListItem>
    ))}
  </StyledList>
);

export const CategoryFilter = ({ categories, onChange, categoryId }: Props) =>
  renderList(categories, onChange, categoryId);
