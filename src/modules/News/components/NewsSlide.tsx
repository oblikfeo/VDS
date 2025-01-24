import { format } from 'date-fns';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { NewsItemType } from '../types';

type Props = {
  news: NewsItemType;
  onClick: (id: number) => void;
};

const Wrapper = styled.div`
  height: 257px;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.xs};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  min-height: 100%;
`;

const Black = styled.div`
  background: #000;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
`;

const TextBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${({ theme }) => theme.indents.xs};
  z-index: 1;
`;

const DateBlock = styled.div`
  color: ${({ theme }) => theme.color.text.tertiary};
`;

const TitleBlock = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const NewsSlide = ({ news, onClick }: Props) => {
  const { title, images, dateAdded, id, mainImageId } = news;

  const imageUrl = useMemo(() => {
    const image = mainImageId ? images.filter((imageItem) => imageItem?.p?.imageId === mainImageId)?.[0] : images[0];

    const isVertical = image?.p?.width && image?.p?.width < image?.p?.height;

    return isVertical ? image?.p?.url : image?.r?.url;
  }, [images, mainImageId]);

  return (
    <Wrapper onClick={() => onClick(id)}>
      <TextBlock>
        <DateBlock>{format(new Date(dateAdded), 'dd.MM.yyyy')}</DateBlock>
        <TitleBlock>{title}</TitleBlock>
      </TextBlock>
      <Black />
      <ImageBox>
        <StyledImage src={imageUrl} />
      </ImageBox>
    </Wrapper>
  );
};
