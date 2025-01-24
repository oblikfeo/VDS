import { format } from 'date-fns';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { PageTitle } from '../../../layouts/Lampastar';
import { Container, Row, Col } from '../../../ui/components';
import { Breadcrumbs } from '../../../ui/components/Breadcrumbs';
import { NewsItemType } from '../types';
import { reformatLinks } from '../utils';

type Props = {
  item: NewsItemType;
};

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateBlock = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typography.body4};
  color: ${({ theme }) => theme.color.text.tertiary};
  margin-left: ${({ theme }) => theme.indents.s};
  margin-bottom: ${({ theme }) => theme.indents.xxl};
`;

const TextBlock = styled.div`
  ${({ theme }) => theme.typography.body4};
`;

const StyledCol = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const StyledImg = styled.img`
  max-width: 100%;
  border-radius: ${({ theme }) => theme.radius.xs};
`;

const breadcrumbs = [{ path: '/news', label: 'Новости' }];

export const NewsDetail = ({ item }: Props) => {
  const { title, dateAdded, text, images, mainImageId } = item;

  const mainImage = images.filter(({ r }) => r?.imageId === mainImageId);
  const otherImages = images.filter(({ r }) => r?.imageId !== mainImageId);

  const formattedText = useMemo(() => reformatLinks(text), [text]);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <TitleBlock>
        <PageTitle>{title}</PageTitle>
        <DateBlock>{format(new Date(dateAdded), 'dd.MM.yyyy')}</DateBlock>
      </TitleBlock>
      <Container>
        <Row>
          <StyledCol desktopS={7}>
            <TextBlock>{formattedText}</TextBlock>
          </StyledCol>
          <Col desktopS={5}>
            <Container>
              <Row indent={10}>
                {mainImage.map(({ q, r }) => {
                  if (q && q.width < q.height)
                    return (
                      <StyledCol key={q?.id} mobile={6}>
                        <StyledImg src={q?.url} />
                      </StyledCol>
                    );

                  if (r && r.width >= r.height)
                    return (
                      <StyledCol key={r?.id} mobile={12}>
                        <StyledImg src={r?.url} />
                      </StyledCol>
                    );

                  return null;
                })}
                {otherImages.map(({ q, r }) => {
                  if (q && q.width < q.height)
                    return (
                      <StyledCol key={q?.id} mobile={6}>
                        <StyledImg src={q?.url} />
                      </StyledCol>
                    );

                  if (r && r.width >= r.height)
                    return (
                      <StyledCol key={r?.id} mobile={12}>
                        <StyledImg src={r?.url} />
                      </StyledCol>
                    );

                  return null;
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
