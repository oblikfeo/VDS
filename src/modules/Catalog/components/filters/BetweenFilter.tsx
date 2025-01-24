import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input } from '../../../../ui/components';
import { FiltersValuesType, FilterType, FilterValueBetweenType } from '../../types';

const InputLine = styled.div`
  display: flex;
`;

type Props = {
  filter: FilterType<FilterValueBetweenType, number | string>;
  setFilter: (value: FiltersValuesType) => void;
  filtersValues: FiltersValuesType;
};

const DelimiterContainer = styled.div`
  font-size: 16px;
  line-height: 40px;
  margin: 0 ${({ theme }) => theme.indents.xxs};
`;

export const BetweenFilter = ({ filter, setFilter, filtersValues }: Props) => {
  const { value } = filter;

  const [min, setMin] = useState(
    Number(
      filtersValues[Object.keys(filtersValues).filter((filterId) => filterId === filter.id.toString())[0]]?.values?.[0],
    ) || value.min,
  );
  const [max, setMax] = useState(
    Number(
      filtersValues[Object.keys(filtersValues).filter((filterId) => filterId === filter.id.toString())[0]]?.values?.[1],
    ) || value.max,
  );

  useEffect(() => {
    let newFilterMin;
    let newFilterMax;

    if (min !== value.min) {
      newFilterMin = min.toString();
    }

    if (max !== value.max) {
      newFilterMax = max.toString();
    }

    if (newFilterMax)
      setFilter({
        ...filtersValues,
        [filter.id]: { values: [newFilterMin ?? value.min.toString(), newFilterMax], between: true },
      });
    else if (newFilterMin) setFilter({ ...filtersValues, [filter.id]: { values: [newFilterMin], between: true } });
    else {
      const { [filter.id]: deletedFilter, ...newFilters } = filtersValues;
      setFilter(newFilters);
    }
  }, [filter.id, max, min, value.max, value.min]);

  const onChangeMax = (inputValue: number) => {
    const numberValue = Number(inputValue);
    if (numberValue > value.max || numberValue < min) setMax(value.max);
    else setMax(numberValue);
  };

  const onChangeMin = (inputValue: number) => {
    const numberValue = Number(inputValue);
    if (numberValue > max || numberValue < value.min) setMin(value.min);
    else setMin(numberValue);
  };

  return (
    <InputLine>
      <Input
        type="number"
        placeholder={value.min.toString()}
        value={min}
        min={min}
        max={max}
        onChange={(e) => onChangeMin(Number(e.target.value || value.min))}
      />
      <DelimiterContainer>&mdash;</DelimiterContainer>
      <Input
        type="number"
        placeholder={value.max.toString()}
        value={max}
        min={min}
        max={max}
        onChange={(e) => onChangeMax(Number(e.target.value || value.max))}
      />
    </InputLine>
  );
};
