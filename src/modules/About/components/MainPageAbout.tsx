'use client';

import React from 'react';
import styled from 'styled-components';

import { AboutItem } from './AboutItem';
import { Header, Typography } from '../../../ui/components';
import { Container, Row, Col } from '../../../ui/components';
import { FastDelivery, PriceTag, Speed, Sync } from '../../../ui/icons';

const StyledHeader = styled(Header)`
  margin-top: ${({ theme }) => theme.indents.xxxl};
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const StyledCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const TitleTypography = styled(Typography).attrs({ tag: 'h2', variant: 'main1' })`
  margin: 0;
`;

export const MainPageAbout = () => (
  <>
    <StyledHeader title={<TitleTypography>Наши преимущества</TitleTypography>} />
    <Container>
      <Row indent={12}>
        <StyledCol mobile={12} tablet={6} desktopS={6} desktopM={3}>
          <AboutItem icon={<Sync />} text="Быстрый обмен и возврат" />
        </StyledCol>
        <StyledCol mobile={12} tablet={6} desktopS={6} desktopM={3}>
          <AboutItem icon={<PriceTag />} text="Беспроцентная рассрочка" />
        </StyledCol>
        <StyledCol mobile={12} tablet={6} desktopS={6} desktopM={3}>
          <AboutItem icon={<FastDelivery />} text="Удобная доставка" />
        </StyledCol>
        <StyledCol mobile={12} tablet={6} desktopS={6} desktopM={3}>
          <AboutItem icon={<Speed />} text="Тест-драйв" />
        </StyledCol>
      </Row>
    </Container>
  </>
);
