'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import { NewsResponseType } from '@modules/News/types';

import { Container, Row, Col, Header, Typography } from '../../../ui/components';
import { Carousel } from '../../../ui/components/Carousel';
import { CarouselSlideSkeleton } from '../components';
import { NewsSlide } from '../components/NewsSlide';
import { useNewsCarousel } from '../hooks';

const StyledHeader = styled(Header)`
  margin-top: ${({ theme }) => theme.indents.xxxl};
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const TitleTypography = styled(Typography).attrs({ tag: 'h2', variant: 'main1' })`
  margin: 0;
`;

type Props = {
  initialData?: NewsResponseType;
};

export const NewsCarousel = ({ initialData }: Props) => {
  const router = useRouter();
  const { list, isLoading } = useNewsCarousel(initialData);

  const handleOnClick = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
    <>
      <StyledHeader title={<TitleTypography>Новости</TitleTypography>} />
      <Carousel>
        <Container>
          <Row isWrap={false} indent={12}>
            {isLoading
              ? [...Array(6)].map((_item, index) => (
                  <Col key={index} mobile={6} tablet={3} desktopS={2}>
                    <CarouselSlideSkeleton />
                  </Col>
                ))
              : list.map((news) => (
                  <Col key={news.id} mobile={6} tablet={3} desktopS={2}>
                    <NewsSlide key={news.id} news={news} onClick={handleOnClick} />
                  </Col>
                ))}
          </Row>
        </Container>
      </Carousel>
    </>
  );
};
