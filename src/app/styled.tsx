'use client';

import styled from 'styled-components';

import { ContentWrapper } from '@layouts/Lampastar/components/ComponentWrapper';
import { adaptive, Col, Row } from '@ui/components';

export const PromoSection = styled(Row)`
  margin-bottom: -${({ theme }) => theme.indents.s};
`;

export const ContentSection = styled.div`
  margin-top: ${({ theme }) => theme.indents.xxxl};
`;

export const SliderCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

export const ErrorWrapper = styled(ContentWrapper)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoBlock = styled.div`
  position: relative;
`;

export const ErrorCode = styled.div`
  font-size: 150px;
  line-height: 219px;
  ${adaptive.minWidth.desktopM} {
    font-size: 309px;
    line-height: 219px;
  }
  color: ${({ theme }) => theme.color.text.contrast};
`;

export const ErrorText = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 24px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.text.tertiary};
`;

export const ErrorDescription = styled.div`
  margin-top: 20px;
  ${adaptive.minWidth.desktopS} {
    margin-top: 40px;
    margin-bottom: 64px;
  }
  max-width: 545px;
  text-align: center;
`;

export const ImageBox = styled.div`
  max-width: 100%;
`;
