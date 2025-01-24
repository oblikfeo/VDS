import React, { ReactNode, useRef } from 'react';
import SimpleBar from 'simplebar-react';
import styled from 'styled-components';

import { ArrowLeft, ArrowRight } from '../../icons';
import { Container } from '../Adaptive';
import { ArrowButton } from '../ArrowButton';

const CarouselBlock = styled.div`
  position: relative;

  ${ArrowButton} {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.2s, opacity 0.2s linear;
  }

  :hover {
    ${ArrowButton} {
      visibility: visible;
      opacity: 1;
    }
  }

  .simplebar-track.simplebar-horizontal {
    display: none;
  }
`;

const PrevArrowButton = styled(ArrowButton)`
  z-index: ${({ theme }) => theme.zIndex.button};
  position: absolute;
  top: calc(50% - 18px);
  left: -12px;
`;
const NextArrowButton = styled(ArrowButton)`
  z-index: ${({ theme }) => theme.zIndex.button};
  position: absolute;
  top: calc(50% - 18px);
  right: -12px;
`;

export const Carousel = ({ children, isLoading }: { children: ReactNode; isLoading?: boolean }) => {
  const carouselRef = useRef<SimpleBar | null>();

  const handleClickPrevSlide = () => {
    const elem = carouselRef.current?.getScrollElement();
    if (elem) {
      elem?.scrollTo({ left: elem.scrollLeft - 288, behavior: 'smooth' });
    }
  };

  const handleClickNextSlide = () => {
    const elem = carouselRef.current?.getScrollElement();
    if (elem) {
      elem?.scrollTo({ left: elem.scrollLeft + 288, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <CarouselBlock>
        {!isLoading && (
          <>
            <PrevArrowButton onClick={handleClickPrevSlide}>
              <ArrowLeft />
            </PrevArrowButton>
            <NextArrowButton onClick={handleClickNextSlide}>
              <ArrowRight />
            </NextArrowButton>
          </>
        )}
        <SimpleBar
          ref={(instance) => {
            carouselRef.current = instance;
          }}
        >
          {children}
        </SimpleBar>
      </CarouselBlock>
    </Container>
  );
};
