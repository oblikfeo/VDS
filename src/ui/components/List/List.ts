import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.span<{ active?: boolean }>`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typography.listItem};
  cursor: pointer;
  transition: background ease 0.2s;
  color: ${({ theme, active }) => (active ? theme.color.text.link : theme.color.text.primary)};

  :hover {
    color: ${({ theme }) => theme.color.text.link}
  }
`;
