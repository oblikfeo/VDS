import styled from 'styled-components';

import { ButtonContained } from '@ui/components';

export const ToggleCard = styled.div`
  display: flex;
  background: white;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px 20px;
`;

export const ToggleInfo = styled.div`
  flex-grow: 1;
`;

export const StyledButton = styled(ButtonContained)`
  margin-top: ${({ theme }) => theme.indents.xl};
`;
