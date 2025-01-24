import Link from 'next/link';
import styled from 'styled-components';

export const BreadcrumbsWrapper = styled.div`
  ${({ theme }) => theme.typography.body4};
  margin-bottom: ${({ theme }) => theme.indents.xxl};
`;

export const BreadcrumbsItem = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.text.tertiary};

  :last-child {
    color: ${({ theme }) => theme.color.text.primary};
  }
`;
