import React, { FormEvent } from 'react';

import { SearchButton, SearchWrapper, StyledSearchInput } from './styled';
import { Search } from '../../icons';
import { Icon } from '../Icon';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const SearchInput = ({ value, onChange, onSubmit }: Props) => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <SearchWrapper onSubmit={onSubmitHandler}>
      <SearchButton type="submit">
        <Icon icon={Search} size="xxxl" />
      </SearchButton>
      <StyledSearchInput
        type="text"
        placeholder="Поиск"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSubmit={onSubmit}
      />
    </SearchWrapper>
  );
};
