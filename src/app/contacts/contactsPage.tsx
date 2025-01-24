'use client';

import React, { ReactNode } from 'react';

import { YaMap } from '@common/components/YaMap';
import { USE_CONTACTS_FORM, useFeature } from '@common/featureToggles';
import { PageTitle } from '@layouts/Lampastar';
import { ContactForm } from '@modules/Contacts';
import { Icon, Typography } from '@ui/components';
import { Col, Container, Row } from '@ui/components/Adaptive';
import { Clock, Mail, Geo, Phone } from '@ui/icons';

import {
  ContactBlock,
  ContactColumn,
  ContactColumns,
  ContactContainer,
  Details,
  MapAndFormContainer,
  MapBlock,
  MapContainer,
  StyledParagraph,
  StyledTitle,
} from './styled';

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <Typography variant="title2" tag="h3">
    {children}
  </Typography>
);

const ContactTitle = ({ children }: { children: ReactNode }) => (
  <StyledTitle variant="body5" tag="h4">
    {children}
  </StyledTitle>
);

const ParameterText = ({ children }: { children: ReactNode }) => (
  <StyledParagraph variant="mini2" tag="p" color="tertiary">
    {children}
  </StyledParagraph>
);

const CaptionText = ({ children }: { children: ReactNode }) => (
  <StyledParagraph variant="body2" tag="p">
    {children}
  </StyledParagraph>
);

export const ContactsPage = () => {
  const isContactEnabled = useFeature(USE_CONTACTS_FORM);

  return (
    <>
      <PageTitle>Контакты</PageTitle>
      <SectionTitle>Где нас найти?</SectionTitle>
      <ContactColumns>
        <Container>
          <Row>
            <Col desktopS={3} tablet={6} mobile={12}>
              <ContactColumn>
                <ContactTitle>
                  <Icon icon={Geo} size="xxl" color="contrast" mr="s" />
                  Адрес
                </ContactTitle>
                <Details>
                  <ContactBlock>
                    <CaptionText>Омская область, г. Омск, ул. 20-я Линия, д. 103, 644009</CaptionText>
                  </ContactBlock>
                  <ContactBlock>
                    <ParameterText>
                      Въезд с улицы 20-я Линия, остановка автобуса и трамвая &quot;Улица 20-я линия&quot;
                    </ParameterText>
                  </ContactBlock>
                </Details>
              </ContactColumn>
            </Col>
            <Col desktopS={3} tablet={6} mobile={12}>
              <ContactColumn>
                <ContactTitle>
                  <Icon icon={Clock} size="xxl" color="contrast" mr="s" />
                  Режим работы
                </ContactTitle>
                <Details>
                  <ContactBlock>
                    <ParameterText>ПН – ПТ</ParameterText>
                    <CaptionText>с 09:00 до 18:00</CaptionText>
                  </ContactBlock>
                  <ContactBlock>
                    <ParameterText>СБ – ВС</ParameterText>
                    <CaptionText>Выходной</CaptionText>
                  </ContactBlock>
                </Details>
              </ContactColumn>
            </Col>
            <Col desktopS={3} tablet={6} mobile={12}>
              <ContactColumn>
                <ContactTitle>
                  <Icon icon={Phone} size="xxl" color="contrast" mr="s" />
                  Контакты
                </ContactTitle>
                <Details>
                  <ContactBlock>
                    <ParameterText>Телефоны</ParameterText>
                    <CaptionText>+7 (3812) 38-75-35</CaptionText>
                    <CaptionText>+7 (3812) 36-69-00</CaptionText>
                  </ContactBlock>
                  <ContactBlock>
                    <ParameterText>Whatsapp, Viber</ParameterText>
                    <CaptionText>+7 (962) 059-88-08</CaptionText>
                  </ContactBlock>
                  <ContactBlock>
                    <ParameterText>Факс</ParameterText>
                    <CaptionText>+7 (3812) 36-69-00</CaptionText>
                  </ContactBlock>
                  <ContactBlock>
                    <ParameterText>Почта</ParameterText>
                    <CaptionText>vs@lampastar.ru</CaptionText>
                  </ContactBlock>
                </Details>
              </ContactColumn>
            </Col>
            <Col desktopS={3} tablet={6} mobile={12}>
              <ContactColumn>
                <ContactTitle>
                  <Icon icon={Mail} size="xxl" color="contrast" mr="s" />
                  Социальные сети
                </ContactTitle>
                <Details>
                  <ContactBlock>
                    <ParameterText>VK</ParameterText>
                    <CaptionText>@lampastar</CaptionText>
                  </ContactBlock>
                </Details>
              </ContactColumn>
            </Col>
          </Row>
        </Container>
      </ContactColumns>
      <MapAndFormContainer>
        <MapContainer>
          <SectionTitle>Мы находимся здесь</SectionTitle>
          <MapBlock>
            <YaMap height={296} width="100%" />
          </MapBlock>
        </MapContainer>
        {isContactEnabled && (
          <ContactContainer>
            <SectionTitle>Есть вопросы? Мы ответим</SectionTitle>
            <ContactForm />
          </ContactContainer>
        )}
      </MapAndFormContainer>
    </>
  );
};
