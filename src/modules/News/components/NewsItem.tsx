import { format } from 'date-fns';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Container, Col, Row, Typography } from '../../../ui/components';
import { ImageSizeEnum, NewsItemType } from '../types';
import { reformatLinks } from '../utils';

type Props = {
  item: NewsItemType;
  onClick: (id: number) => void;
  imageType: ImageSizeEnum;
};

const Wrapper = styled.div``;

const Delimiter = styled.hr`
  margin: ${({ theme }) => theme.indents.xl} 0;
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: ${({ theme }) => theme.radius.xs};
`;

const DateBlock = styled.div`
  ${({ theme }) => theme.typography.mini2};
  color: ${({ theme }) => theme.color.text.tertiary};
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const TextBlock = styled.div`
  ${({ theme }) => theme.typography.body4};
`;

const Title = styled(Typography).attrs({ variant: 'main2', tag: 'h2' })`
  margin: 0;
  cursor: pointer;
`;

export const NewsItem = ({ item, onClick, imageType }: Props) => {
  const { text, images, dateAdded, title, id, mainImageId } = item;

  const imageUrl = mainImageId
    ? images.filter((image) => image?.[imageType]?.imageId === mainImageId)?.[0]?.[imageType]?.url
    : images[0]?.[imageType]?.url;

  const formattedText = useMemo(() => reformatLinks(text), [text]);

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col desktopS={2}>{imageUrl && <StyledImg src={imageUrl} />}</Col>
          <Col desktopS={10}>
            <Title onClick={() => onClick(id)}>{title}</Title>
            <DateBlock>{format(new Date(dateAdded), 'dd.MM.yyyy')}</DateBlock>
            <TextBlock>{formattedText}</TextBlock>
          </Col>
        </Row>
      </Container>
      <Delimiter />
    </Wrapper>
  );
};
