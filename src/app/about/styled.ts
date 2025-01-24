import Image from 'next/image';
import styled from 'styled-components';

import { Logo } from '@resources/images';

const MAX_WIDTH = '744px';

export const StyledLogo = styled(Image).attrs({ src: Logo, alt: 'LAMPASTAR' })`
  width: 200px;
  height: 110px;
`;

export const AboutWrapper = styled.section`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleLine = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  margin-top: 100px;

  :first-of-type {
    margin-top: 40px;
  }
`;

export const TitleLineBackground = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.background.tertiary};
  height: 68px;
  left: 0;
  right: 0;
`;

export const TitleLineTypography = styled.div`
  max-width: ${MAX_WIDTH};
  width: 100%;
  margin: 0 auto;
  z-index: 1;
`;

export const Item = styled.div`
  ${({ theme }) => theme.typography.mini2};
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ItemImage = styled.div`
  margin-right: 20px;
`;

export const Line = styled.div`
  background: ${({ theme }) => theme.color.background.tertiary};
  width: 100%;
  height: 1px;
  margin: 60px 0;
`;

export const BrandImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledImageBrand = styled.div`
  margin: 20px 20px;
`;

export const AboutImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AboutVideoContainer = styled.div`
  margin: 20px 20px;
  max-width: 640px;
  flex-grow: 1;
`;

export const StyledImageCert = styled.div`
  margin: 20px 10px;
  cursor: pointer;
`;

export const CertificatesContainer = styled.div`
  ${({ theme }) => theme.typography.body5}
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const CertificatesLine = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
