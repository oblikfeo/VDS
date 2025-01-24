import Link from "next/link";
import styled from 'styled-components';

import {MAX_CONTENT_WIDTH, MIN_CONTENT_WIDTH} from "@layouts/Lampastar/constants";

export const StyledFooter = styled.footer`
  margin: 80px 0 0;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};
  min-width: ${MIN_CONTENT_WIDTH};
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  padding: 40px 40px 20px;
  position: relative;
  z-index: 1;
`;

export const FooterWrapper = styled.div<{ vertical?: boolean }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  gap: 20px 40px;
  align-items: ${({ vertical }) => (vertical ? 'center' : 'flex-start')};
`;

export const FooterLogo = styled(Link)`
  width: 118px;
  height: 56px;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  margin: -40px 0 0 -40px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 30px;
  flex-grow: 1;
`;

export const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const FooterContentWrapperBig = styled(FooterContentWrapper)`
  flex-grow: 1;
`;

export const FooterContentText = styled.span`
  ${({ theme }) => theme.typography.body4};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const FooterMenuLink = styled.a`
  ${({ theme }) => theme.typography.body4};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const FooterMap = styled.div`
  display: flex;
`;

export const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.background.primary};
  opacity: 0.1;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  width: 100%;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
`;

export const FooterLink = styled.a`
  display: flex;
`;

export const FooterDigital = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`;

export const FooterDigitalText = styled.span`
  ${({ theme }) => theme.typography.mini2};
  color: ${({ theme }) => theme.color.text.secondary};
  opacity: 0.8;
`;

export const FooterDigitalLink = styled.a`
  display: flex;
`;