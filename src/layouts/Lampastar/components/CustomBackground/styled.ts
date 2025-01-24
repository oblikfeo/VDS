import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const ShortBlack = styled.div`
  width: calc(100% - 118px);
  height: 56px;
  border-radius: 20px 20px 0 0;
  background: ${({ theme }) => theme.color.background.secondary};
  position: absolute;
  top: 0;
  right: 0;
`;

export const LongBlack = styled.div<{ main: boolean }>`
  border-radius: 20px 0 ${({ main }) => (main ? '0' : '20px')} ${({ main }) => (main ? '0' : '20px')};
  width: 100%;
  height: calc(100% - 56px);
  background: ${({ theme }) => theme.color.background.secondary};
  position: absolute;
  top: 56px;
  right: 0;
`;

export const SmallBlack = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.color.background.secondary};
  position: absolute;
  z-index: 1;
  bottom: calc(100% - 56px);
  right: calc(100% - 118px);
`;

export const White = styled.div`
  position: absolute;
  z-index: 2;
  width: 118px;
  height: 56px;
  background: ${({ theme }) => theme.color.background.main};
  border-radius: 20px;
`;