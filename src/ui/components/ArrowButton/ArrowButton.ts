import styled from 'styled-components';

export const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.color.background.primary};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 10px ${({ theme }) => theme.color.background.secondaryHover};

  :hover {
    box-shadow: 2px 2px 10px ${({ theme }) => theme.color.background.secondaryHover};
  }
`;
