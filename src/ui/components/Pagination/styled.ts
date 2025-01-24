import styled from 'styled-components';

import { Card } from '../Card';

export const PaginationContainer = styled.div`
  display: flex;
`;

export const PageButton = styled(Card).attrs({ clickable: true, mini: true })<{ grow?: boolean }>`
  ${({ grow }) => (grow ? 'flex-grow: 1' : '')};
  display: flex;
  justify-content: center;
  margin: 0 2px;
  max-width: 70px;
  white-space: nowrap;

  :first-child {
    margin-left: 0;
    ${({ grow }) => (grow ? '' : 'margin-right: 10px')};
  }

  :last-child {
    margin-right: 0;
    ${({ grow }) => (grow ? '' : 'margin-left: 10px')};
  }
`;
