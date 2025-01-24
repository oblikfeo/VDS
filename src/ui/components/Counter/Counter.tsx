import React, { useState } from 'react';

import { CounterButton, CounterContainer, CounterInput } from './styled';
import { Plus, Minus } from '../../icons';
import { Icon } from '../Icon';

type Props = {
  value: number;
  onChange?: (value: number) => void;
};

export const Counter = ({ value, onChange }: Props) => {
  const [count, setCount] = useState(value);
  const onBlurHandler = () => {
    onChange?.(count);
  };

  const onChangePlus = () => {
    onChange?.(value + 1);
  };

  const onChangeMinus = () => {
    onChange?.(value - 1);
  };

  return (
    <CounterContainer>
      <CounterButton secondary onClick={onChangeMinus}>
        <Icon icon={Minus} size="xs" />
      </CounterButton>
      <CounterInput
        type="number"
        value={count}
        onBlur={onBlurHandler}
        onChange={(e) => setCount(Number(e.target.value) ?? 0)}
      />
      <CounterButton secondary onClick={onChangePlus}>
        <Icon icon={Plus} size="xs" />
      </CounterButton>
    </CounterContainer>
  );
};
