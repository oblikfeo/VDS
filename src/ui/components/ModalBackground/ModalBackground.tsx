import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  onClick: () => void;
  isTransparent?: boolean;
  isBottomContent?: boolean;
  fullWidth?: boolean;
};

const StyledBackground = styled.div<{ isTransparent?: boolean; isBottomContent?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ isTransparent }) => (isTransparent ? 'transparent' : 'rgba(0, 0, 0, 0.5)')};
  display: flex;
  align-items: ${({ isBottomContent }) => (isBottomContent ? 'flex-end' : 'center')};
  justify-content: center;
`;

const InnerContent = styled.div<{ fullWidth?: boolean }>`
  position: relative;
  display: flex;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '80%')};
  max-height: 80%;
  ${({ fullWidth }) => fullWidth && 'width: 100%'}
`;

export const ModalBackground = ({ children, onClick, isTransparent, isBottomContent, fullWidth }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <StyledBackground onClick={onClick} isTransparent={isTransparent} isBottomContent={isBottomContent}>
      <InnerContent fullWidth={fullWidth} onClick={(e) => e.stopPropagation()}>
        {children}
      </InnerContent>
    </StyledBackground>
  );
};
