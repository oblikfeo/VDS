import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../../../../ui/components/Adaptive';
import { ListItemSkeleton, TextSkeleton } from '../../../../ui/components/Skeleton';

const StyledListSkeleton = styled.div`
  padding-right: ${({ theme }) => theme.indents.l};
  margin-right ${({ theme }) => theme.indents.l};
  border-right: 1px solid ${({ theme }) => theme.color.border.input};
`;

const StyledColumnSecondary = styled(Col)`
  margin-top: ${({ theme }) => theme.indents.xl};
`;

const getRandomWidth = () => {
  const rand = Math.random();

  return `${30 + 70 * rand}%`;
};

const items = [...Array(11)].map(() => getRandomWidth());

export const CatalogMenuSkeleton = React.memo(() => (
  <Container>
    <Row>
      <Col desktopS={4}>
        <StyledListSkeleton>
          {items.map((width, index) => (
            <ListItemSkeleton key={index} width={width} active={index === 2} />
          ))}
        </StyledListSkeleton>
      </Col>
      <Col desktopS={8}>
        <Container>
          <TextSkeleton width={140} />
          <Row>
            {[...Array(5)].map((_item, index) => (
              <StyledColumnSecondary key={index} mobile={6}>
                <TextSkeleton width="50%" size="body2" />
                {[...Array(2)].map((_item, index) => (
                  <StyledColumnSecondary key={index} mobile={6}>
                    <TextSkeleton width="50%" size="mini2" />
                  </StyledColumnSecondary>
                ))}
              </StyledColumnSecondary>
            ))}
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
));

CatalogMenuSkeleton.displayName = 'CatalogMenuSkeleton';
