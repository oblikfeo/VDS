import styled from 'styled-components';

import { Card } from '../Card';

export const InfoCard = styled(Card)`
  ${({ theme }) => theme.typography.mini1}
`;
