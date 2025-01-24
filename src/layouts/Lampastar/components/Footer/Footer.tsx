import Image from 'next/image';
import React from 'react';

import { ROUTES } from '@common/constants/routes';
import { CustomBackground } from "@layouts/Lampastar/components/CustomBackground";
import {
  FooterBottom,
  FooterContainer,
  FooterContent,
  FooterContentText,
  FooterContentWrapper, FooterContentWrapperBig,
  FooterDigital,
  FooterDigitalLink,
  FooterDigitalText,
  FooterLine, FooterLink,
  FooterLinks,
  FooterLogo,
  FooterMap,
  FooterMenu,
  FooterMenuLink,
  FooterWrapper,
  StyledFooter
} from "@layouts/Lampastar/components/Footer/styled";
import { Map } from '@resources/images';

import { FOR_CLIENT_MENU } from '../../../../common/constants';
import { CallMeForm } from '../../../../modules/Contacts';
import { Logo } from '../../../../resources/images';
import { WhatsApp, Telegram, Instagram, Digital } from '../../../../ui/icons';

const { home } = ROUTES;

export const Footer = () => (
  <StyledFooter>
    <FooterContainer>
      <FooterWrapper>
        <FooterLogo href={home.path}>
          <Image src={Logo} alt="Лампастар" />
        </FooterLogo>
        <FooterContent>
          <FooterContentWrapper>
            <FooterContentText>Покупателям</FooterContentText>
            <FooterMenu>
              {FOR_CLIENT_MENU.map((item: string) => (
                <FooterMenuLink href={ROUTES[item].path} key={ROUTES[item].path}>{ROUTES[item].label}</FooterMenuLink>
              ))}
            </FooterMenu>
          </FooterContentWrapper>
          <FooterContentWrapperBig>
            <FooterContentText>Свяжитесь с нами</FooterContentText>
            <CallMeForm />
          </FooterContentWrapperBig>
          <FooterContentWrapper>
            <FooterContentText>На карте</FooterContentText>
            <FooterMap>
              <Image src={Map} alt="Заглушка" />
            </FooterMap>
          </FooterContentWrapper>
        </FooterContent>
      </FooterWrapper>
      <FooterWrapper vertical>
        <FooterLine/>
        <FooterBottom>
          <FooterLinks>
            <FooterLink href="#">
              <WhatsApp/>
            </FooterLink>
            <FooterLink href="#">
              <Telegram/>
            </FooterLink>
            <FooterLink href="#">
              <Instagram/>
            </FooterLink>
          </FooterLinks>
          <FooterDigital>
            <FooterDigitalText>Создание и продвижение</FooterDigitalText>
            <FooterDigitalLink href="https://digitalaround.ru/">
              <Digital/>
            </FooterDigitalLink>
          </FooterDigital>
        </FooterBottom>
      </FooterWrapper>
      <CustomBackground />
    </FooterContainer>
  </StyledFooter>
);
