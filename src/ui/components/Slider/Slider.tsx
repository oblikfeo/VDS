import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ArrowLeft, ArrowRight } from '../../icons';
import { Container } from '../Adaptive';
import { ArrowButton } from '../ArrowButton';

type Props = {
  slides: ReactNode[];
  isLoading?: boolean;
  enableAuto?: boolean;
  timeAuto?: number;
};

const SliderBlock = styled.div`
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
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  min-width: 100%;
  max-width: 100%;
`;

const BottomPanel = styled.div`
  display: flex;
  justify-content: center;
`;

const BottomControl = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.background.dark};
  margin-top: ${({ theme }) => theme.indents.s};
  opacity: 0.3;
  height: 20px;
  border-radius: 10px;
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

const BottomControlButton = styled.div<{ active: boolean }>`
  background: ${({ theme }) => theme.color.background.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;

  ${({ active }) => (active ? 'opacity: 1' : 'opacity: .35')};

  :last-child {
    margin-right: 10px;
  }
`;

export const Slider = ({ slides, isLoading, enableAuto = true, timeAuto = 4000 }: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [autoStopped, setAutoStopped] = useState(false);
  const [counter, setCounter] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current?.scrollTo({
        left: (activeSlideIndex * (sliderRef.current?.scrollWidth || 0)) / (slides.length || 1),
        behavior: 'smooth',
      });
    }
  }, [activeSlideIndex]);

  const handleClickBottomControl = (index: number) => {
    setActiveSlideIndex(index);
  };

  const handleClickPrevSlide = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    let newIndex = activeSlideIndex - 1;
    if (newIndex < 0) newIndex = slides.length - 1;

    setActiveSlideIndex(newIndex);

    if (!isLoading && slides.length > 1 && enableAuto) {
      timerRef.current = setTimeout(() => setCounter(counter + 1), timeAuto);
    }
  };

  const nextSlideWithTimeout = (skipSliding: boolean) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (!skipSliding) {
      let newIndex = activeSlideIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;

      setActiveSlideIndex(newIndex);
    }

    if (!isLoading && slides.length > 1 && enableAuto) {
      timerRef.current = setTimeout(() => setCounter(counter + 1), timeAuto);
    }
  };

  const handleClickNextSlide = () => {
    nextSlideWithTimeout(false);
  };

  useEffect(() => {
    if (autoStopped) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    } else {
      nextSlideWithTimeout(true);
    }
  }, [autoStopped]);

  useEffect(() => {
    nextSlideWithTimeout(counter < 1);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isLoading, slides, enableAuto, counter]);

  if (!slides.length) return null;

  return (
    <Container
      onMouseEnter={() => setAutoStopped(true)}
      onMouseLeave={() => setAutoStopped(false)}
      onTouchMove={() => setAutoStopped(true)}
      onTouchEnd={() => setAutoStopped(false)}
    >
      <SliderBlock>
        {slides.length > 1 && (
          <>
            <PrevArrowButton onClick={handleClickPrevSlide}>
              <ArrowLeft />
            </PrevArrowButton>
            <NextArrowButton onClick={handleClickNextSlide}>
              <ArrowRight />
            </NextArrowButton>
          </>
        )}
        <Wrapper ref={(instance) => (sliderRef.current = instance)}>
          {slides.map((slide, index) => (
            <Slide key={index}>{slide}</Slide>
          ))}
        </Wrapper>
      </SliderBlock>
      <BottomPanel>
        <BottomControl>
          {slides.map((_slide, index) => (
            <BottomControlButton
              key={index}
              active={index === activeSlideIndex}
              onClick={() => handleClickBottomControl(index)}
            />
          ))}
        </BottomControl>
      </BottomPanel>
    </Container>
  );
};
