'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { ImageModal } from '@common/components/ImageModal';
import { useModal } from '@common/hooks/useModal';
import { PageTitle } from '@layouts/Lampastar';
import { Typography } from '@ui/components/Typography';

import { certImages } from './constants';
import { INFORMATION_ABOUT, INFORMATION_ONLY_WE, INFORMATION_WHAT_WE_DO } from './information';
import {
  StyledLogo,
  TitleLine,
  TitleLineBackground,
  TitleLineTypography,
  AboutWrapper,
  Item,
  ItemImage,
  Line,
  BrandImages,
  StyledImageBrand,
  AboutImages,
  CertificatesContainer,
  StyledImageCert,
  CertificatesLine,
  AboutVideoContainer,
} from './styled';

const TitleLineContainer = React.memo(
  styled(({ title, className }: { title: string; className?: string }) => (
    <TitleLine className={className}>
      <TitleLineBackground />
      <TitleLineTypography>
        <Typography variant="title2">{title}</Typography>
      </TitleLineTypography>
    </TitleLine>
  ))``,
);

TitleLineContainer.displayName = 'TitleLineContainer';

const ItemContainer = React.memo(({ icon, text }: { icon: string; text: string }) => (
  <Item>
    <ItemImage>
      <Image src={icon} alt="" />
    </ItemImage>
    {text}
  </Item>
));

ItemContainer.displayName = 'ItemContainer';

const StyledTitleLineContainer = styled(TitleLineContainer)`
  margin-top: 30px;
`;

const IMAGE_CERT_MODAL_ID = 'IMAGE_CERT_MODAL_ID';

export const AboutPage = () => {
  const { openModal } = useModal();

  const onClickImage = (id: number) => {
    openModal(IMAGE_CERT_MODAL_ID, { currentImageId: id });
  };

  return (
    <>
      <PageTitle>Кто мы</PageTitle>
      <AboutWrapper>
        <StyledLogo />
        <Typography tag="h2" variant="body3">
          Электрика от «Э» до «А»
        </Typography>
        <Typography tag="h3" variant="mini1" color="tertiary">
          Работаем с 2006 года
        </Typography>
      </AboutWrapper>
      <StyledTitleLineContainer title="КТО МЫ" />
      <AboutWrapper>
        {INFORMATION_ABOUT.map(({ icon, text }) => (
          <ItemContainer key={text} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <AboutImages>
        <AboutVideoContainer>
          <iframe
            title="office_video_1"
            src="https://vk.com/video_ext.php?oid=-191108805&id=456239032&hash=9963c47fdf14318a"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          />
        </AboutVideoContainer>
        <AboutVideoContainer>
          <iframe
            title="office_video_2"
            src="https://vk.com/video_ext.php?oid=-191108805&id=456239035&hash=d0b7a4bc0da2cd18"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          />
        </AboutVideoContainer>
      </AboutImages>
      <TitleLineContainer title="ТОЛЬКО МЫ" />
      <AboutWrapper>
        {INFORMATION_ONLY_WE.map(({ icon, text }) => (
          <ItemContainer key={text} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <BrandImages>
        <StyledImageBrand>
          <img src="/brand_abb.png" alt="ABB" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_dkc.png" alt="DKC" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_ekf.png" alt="EKF" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_gsz.png" alt="GZS" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_iek.png" alt="IEK" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_nkz.png" alt="NKZ" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_legrand.png" alt="LEGRAND" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_se.png" alt="SE" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_st.png" alt="ST" />
        </StyledImageBrand>
        <StyledImageBrand>
          <img src="/brand_era.png" alt="ERA" />
        </StyledImageBrand>
      </BrandImages>
      <TitleLineContainer title="ЧТО УМЕЕМ" />
      <AboutWrapper>
        {INFORMATION_WHAT_WE_DO.map(({ icon, text }) => (
          <ItemContainer key={text} icon={icon} text={text} />
        ))}
      </AboutWrapper>
      <Line />
      <CertificatesContainer>
        <div>Закрываем спецификацию любой сложности в кратчайшие сроки</div>
        <CertificatesLine>
          {certImages.map(({ id, imageMin, alt }) => (
            <StyledImageCert key={id} onClick={() => onClickImage(id)}>
              <img src={imageMin} alt={alt} />
            </StyledImageCert>
          ))}
        </CertificatesLine>
      </CertificatesContainer>
      <ImageModal modalId={IMAGE_CERT_MODAL_ID} images={certImages} />
    </>
  );
};
