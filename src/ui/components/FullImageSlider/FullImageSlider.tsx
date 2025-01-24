'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ImageWithSizeType } from '../../../common/types';
import { LIGHT_THEME } from '../../../layouts/Lampastar/themes';
import { ArrowLeft, ArrowRight, Close } from '../../icons';

type Props = {
  images: ImageWithSizeType[];
  currentImageId?: number;
  onClose: () => void;
};

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const SliderWrapper = styled.div`
  position: relative;
  background: ${LIGHT_THEME.color.background.secondary};
  padding: 40px 40px 20px;
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  color: ${LIGHT_THEME.color.text.secondary};
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FullImageSlider = ({ images, currentImageId, onClose }: Props) => {
  const [currentImage, setCurrentImage] = useState(images.filter(({ id }) => id === currentImageId)[0] ?? null);

  const handleClickNext = () => {
    const imageIndex = images.indexOf(currentImage);

    if (imageIndex >= 0) {
      let newIndex = imageIndex + 1;

      if (newIndex > images.length - 1) newIndex = 0;

      setCurrentImage(images[newIndex]);
    }
  };

  const handleClickPrev = () => {
    const imageIndex = images.indexOf(currentImage);

    if (imageIndex >= 0) {
      let newIndex = imageIndex - 1;

      if (newIndex < 0) newIndex = images.length - 1;

      setCurrentImage(images[newIndex]);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    console.log(e);
    // eslint-disable-next-line eqeqeq
    if (e.keyCode == 37) {
      handleClickPrev();
      // eslint-disable-next-line eqeqeq
    } else if (e.keyCode == 39) {
      handleClickNext();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentImage]);

  return (
    <SliderWrapper>
      <ControlPanel>
        <ButtonContainer onClick={handleClickPrev}>
          <ArrowLeft />
        </ButtonContainer>
        <ButtonContainer onClick={handleClickNext}>
          <ArrowRight />
        </ButtonContainer>
        <ButtonContainer onClick={onClose}>
          <Close />
        </ButtonContainer>
      </ControlPanel>
      <ImageContainer>
        {currentImage && <StyledImg src={currentImage.image} alt={currentImage.alt || ''} />}
      </ImageContainer>
      {/* {images */}
      {/*  .filter(({ id }) => id === currentImageId) */}
      {/*  .map(({ id, image }) => ( */}
      {/*    <StyledImg key={id} src={image} /> */}
      {/*  ))} */}
    </SliderWrapper>
  );
};
