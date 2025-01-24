import React from 'react';
import styled from 'styled-components';

import { Toast } from './Toast';
import { useToasts } from '../../hooks';

const FixedWrapper = styled.div`
  position: fixed;
  top: 150px;
  right: 0;
  left: 100%;
  z-index: 15;
`;

export const Toasts = () => {
  const { toasts, removeToast } = useToasts();

  return (
    <FixedWrapper>
      {toasts?.map(({ id, message, status, time, closeable }) => (
        <Toast
          key={id}
          message={message}
          status={status}
          time={time}
          closeable={closeable}
          close={() => removeToast(id)}
        />
      ))}
    </FixedWrapper>
  );
};
