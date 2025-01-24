import React, { useEffect, useRef } from 'react';
import styled, { DefaultTheme } from 'styled-components';

import { Close } from '../../../ui/icons';
import { ToastStatusEnum } from '../../types';

type Props = {
  message: string;
  status?: ToastStatusEnum;
  time?: number;
  closeable?: boolean;
  close: () => void;
};

const ToastItem = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.background.primary};
  padding: ${({ theme }) => theme.indents.m};
  border-radius: ${({ theme }) => theme.radius.xs} 0 0 ${({ theme }) => theme.radius.xs};
  margin-top: ${({ theme }) => theme.indents.xs};
  overflow: hidden;
  width: 500px;
  max-width: 100vw;
  box-shadow: 0 0 4px 2px ${({ theme }) => theme.color.background.secondaryHover};
  transition: all 0.4s ease;
  left: 0;
`;

const getStatusColor = (theme: DefaultTheme, status?: ToastStatusEnum) => {
  switch (status) {
    case ToastStatusEnum.ERROR:
      return theme.color.status.error;
    case ToastStatusEnum.WARNING:
      return theme.color.status.warning;
    case ToastStatusEnum.SUCCESS:
      return theme.color.status.success;
    default:
      return theme.color.background.contrastLine;
  }
};

const ToastLine = styled.div<{ status?: ToastStatusEnum }>`
  position: absolute;
  background: ${({ theme, status }) => getStatusColor(theme, status)};
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
`;

const CloseIcon = styled.div`
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;

  svg {
    width: 18px;
  }
`;

export const Toast = ({ message, status, time, closeable, close }: Props) => {
  const toastRef = useRef<HTMLDivElement | null>();
  const timerRef = useRef<NodeJS.Timeout>();

  const closeHandler = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (toastRef.current) {
      toastRef.current.style.left = '0px';
    }

    setTimeout(close, 500);
  };

  useEffect(() => {
    if (toastRef.current) {
      toastRef.current.style.left = '-500px';
    }

    if (!closeable) {
      timerRef.current = setTimeout(closeHandler, time || 6000);
    }
  }, []);

  return (
    <ToastItem ref={(instance) => (toastRef.current = instance)}>
      {closeable && (
        <CloseIcon onClick={closeHandler}>
          <Close />
        </CloseIcon>
      )}
      <ToastLine status={status} />
      {message}
    </ToastItem>
  );
};
