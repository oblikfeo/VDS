'use client';

import React from 'react';
import styled from 'styled-components';

import { Card, Col, Container, Row, Typography } from '../../../ui/components';
import { useStaff } from '../hooks';

const WrapperContainer = styled(Container).attrs(() => ({
  fluid: true,
}))`
  margin-top: 60px;
`;

const StyledCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const StyledCard = styled(Card)`
  height: 100%;
`;

const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

const StyledName = styled(Typography).attrs(() => ({
  variant: 'body3',
  tag: 'h4',
}))`
  margin: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.none};
`;

const StyledDescription = styled(Typography).attrs(() => ({
  variant: 'body1',
  tag: 'p',
  color: 'tertiary',
}))`
  margin: ${({ theme }) => theme.indents.xs} ${({ theme }) => theme.indents.none};
`;

export const Staff = () => {
  const { isLoading, isError, list } = useStaff();

  if (isError || isLoading) return null;

  return (
    <WrapperContainer>
      <Row>
        {list.map(({ id, image, name, position }) => (
          <StyledCol key={id} mobile={12} tablet={6} desktopS={4} desktopM={3}>
            <StyledCard>
              {image && <StyledImage src={image} />}
              <StyledName>{name}</StyledName>
              <StyledDescription>{position}</StyledDescription>
            </StyledCard>
          </StyledCol>
        ))}
      </Row>
    </WrapperContainer>
  );
};
