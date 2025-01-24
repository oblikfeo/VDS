'use client';

import React from 'react';
import styled from 'styled-components';

import { formatSum } from '../../../common/utils';
import { adaptive, Button } from '../../../ui/components';
import { promoSliderEnum } from '../constants';

type Props = {
  type: promoSliderEnum;
  backgroundColor: string;
  textColor: string;
  elementFilter?: number | string;
  text: string;
  buttonText: string;
  image: string;
  price?: number;
  minPrice?: boolean;
  onClick: (type: promoSliderEnum, elementId?: number | string) => void;
};

const Wrapper = styled.div<{ background: string; color: string }>`
  position: relative;
  display: flex;
  background: ${({ background }) => background};
  border-radius: ${({ theme }) => theme.radius.s};
  padding: ${({ theme }) => theme.indents.xl};
  height: 300px;
  overflow: hidden;
  color: ${({ color }) => color};

  ${adaptive.maxWidth.mobile} {
    flex-direction: column;
    height: auto;
    padding: ${({ theme }) => theme.indents.m};
  }
`;

const SliderButton = styled(Button.Contained).attrs({ secondary: true, size: 'l' })`
  position: absolute;
  left: ${({ theme }) => theme.indents.xl};
  bottom: ${({ theme }) => theme.indents.xl};
  z-index: 3;

  ${adaptive.maxWidth.mobile} {
    position: static;
  }
`;

const SliderPrice = styled.div`
  ${({ theme }) => theme.typography.body5};
  position: absolute;
  left: ${({ theme }) => theme.indents.xl};
  bottom: calc(${({ theme }) => theme.indents.xl} + ${({ theme }) => theme.indents.xl} + 40px);
  z-index: 3;

  ${adaptive.maxWidth.mobile} {
    position: static;
  }
`;

const ImageBox = styled.div`
  ${adaptive.maxWidth.mobile} {
    display: flex;
    justify-content: center;
    padding-bottom: ${({ theme }) => theme.indents.xxl};
  }

  img {
    //max-width: 100%;
    max-height: 264px;
  }
`;

const SlideText = styled.div<{ black?: boolean }>`
  ${({ theme }) => theme.typography.big2};
  padding: 0 ${({ theme }) => theme.indents.xl} 0 0;
  white-space: pre-line;
  flex-grow: 1;

  ${adaptive.maxWidth.desktopS} {
    ${({ theme }) => theme.typography.big3};
  }

  ${adaptive.maxWidth.mobile} {
    ${({ theme }) => theme.typography.main2};
    padding: 0 0 ${({ theme }) => theme.indents.xl} 0;
  }
`;

export const Slide = ({
  type,
  elementFilter,
  backgroundColor,
  textColor,
  text,
  buttonText,
  image,
  onClick,
  price,
  minPrice,
}: Props) => {
  const handleClickButton = () => {
    onClick(type, elementFilter);
  };

  const priceString = price ? formatSum(price) : undefined;

  const priceResult = minPrice ? `от ${priceString}` : priceString;

  return (
    <Wrapper color={textColor} background={backgroundColor}>
      <SlideText black={!image}>{text.replaceAll('\\n', '\n')}</SlideText>
      {priceString && <SliderPrice>{priceResult}</SliderPrice>}
      <ImageBox>{image && <img alt={buttonText} src={`${image}`} />}</ImageBox>
      {!!elementFilter && <SliderButton onClick={handleClickButton}>{buttonText}</SliderButton>}
    </Wrapper>
  );
};
