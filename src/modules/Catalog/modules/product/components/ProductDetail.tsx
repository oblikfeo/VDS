'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { USE_ORDER, useFeature } from '../../../../../common/featureToggles';
import { formatSum } from '../../../../../common/utils';
import { PageTitle } from '../../../../../layouts/Lampastar';
import { Container, Row, Col, Card, Counter, ButtonContained } from '../../../../../ui/components';
import { Typography } from '../../../../../ui/components';
import { FastDelivery, NoImage, OpenedBox, Shop } from '../../../../../ui/icons';
import { ProductType } from '../../../types';

type Props = {
  product: ProductType;
  onChangeCount: (id: number, count: number) => Promise<void>;
};

const StyledImage = styled.img`
  max-width: 100%;
  width: 100%;
`;

const PriceLine = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

const ActualPrice = styled.div`
  ${({ theme }) => theme.typography.main1};
  white-space: nowrap;
`;

const OldPrice = styled.div`
  white-space: nowrap;
  ${({ theme }) => theme.typography.main2};
  color: ${({ theme }) => theme.color.text.light};
  position: relative;
  margin-left: ${({ theme }) => theme.indents.s};

  ::before {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    top: calc(50% - 1px);
    height: 2px;
    background: ${({ theme }) => theme.color.text.light};
    transform: rotate(175deg);
  }
`;

const DeliveryBlock = styled.div`
  margin-top: ${({ theme }) => theme.indents.s};
`;

const DeliveryIcon = styled.div`
  svg {
    width: 25px;
    height: 25px;
  }
`;

const DeliveryTitle = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCard = styled(Card)`
  height: 100%;
`;

const StyledColCard = styled(Col)`
  margin-bottom: ${({ theme }) => theme.indents.s};
`;

export const ProductDetail = ({ product, onChangeCount }: Props) => {
  const enableOrderFeature = useFeature(USE_ORDER);

  const { id, name, image, price, discount, special, notAvailable, forOrder, basketQuantity } = product;

  const [count, setCount] = useState(basketQuantity ?? 0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (basketQuantity && basketQuantity !== count) setCount(basketQuantity ?? 0);
  }, [basketQuantity]);

  const priceString = price ? formatSum(special || discount || price) : undefined;
  const oldPriceString = priceString && (special || discount) ? formatSum(price) : undefined;

  const onChangeCountHandler = (newCount: number) => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCount(id, newCount).finally(() => setIsLoading(false));
      setCount(newCount);
    }
  };

  const addToBasketHandler = () => {
    if (!notAvailable && !forOrder) {
      setIsLoading(true);
      onChangeCount(id, 1).finally(() => setIsLoading(false));
      setCount(1);
    }
  };

  const buttonText =
    (forOrder && 'Под заказ') ||
    (notAvailable && 'Нет в наличии') ||
    (!enableOrderFeature && 'В наличии') ||
    'В корзину';

  const showCounter = enableOrderFeature && count && !notAvailable && !forOrder;

  return (
    <Container>
      <Row indent={12}>
        <StyledColCard desktopS={5}>
          <StyledCard>{image ? <StyledImage src={image} /> : <NoImage />}</StyledCard>
        </StyledColCard>
        <StyledColCard desktopS={7}>
          <StyledCard>
            <Container>
              <Row>
                <Col>
                  <PageTitle>{name}</PageTitle>
                </Col>
              </Row>
              <Row indent={8}>
                <Col desktopS={8}>
                  <Container>
                    <Row>
                      <Col>{false && <Typography variant="body2">Основные характеристики</Typography>}</Col>
                    </Row>
                    <Row indent={8}>
                      <Col desktopS={6} />
                      <Col desktopS={6} />
                    </Row>
                  </Container>
                </Col>
                <Col desktopS={4}>
                  <PriceLine>
                    {priceString && <ActualPrice>{priceString}</ActualPrice>}
                    {oldPriceString && <OldPrice>{oldPriceString}</OldPrice>}
                  </PriceLine>
                  {isLoading ? (
                    <>ЗАГРУЗКА...</>
                  ) : (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {showCounter ? (
                        <Counter value={count} onChange={onChangeCountHandler} />
                      ) : (
                        <ButtonContained
                          secondary
                          isFluid
                          disabled={!enableOrderFeature || notAvailable || forOrder}
                          onClick={addToBasketHandler}
                        >
                          {buttonText}
                        </ButtonContained>
                      )}
                    </>
                  )}
                  <DeliveryBlock>
                    <DeliveryTitle>
                      <DeliveryIcon>
                        <Shop />
                      </DeliveryIcon>
                      Самовывоз
                    </DeliveryTitle>
                    <Typography variant="mini1">из магазина, бесплатно</Typography>
                  </DeliveryBlock>
                  <DeliveryBlock>
                    <DeliveryTitle>
                      <DeliveryIcon>
                        <FastDelivery />
                      </DeliveryIcon>
                      Доставка
                    </DeliveryTitle>
                    <Typography variant="mini1">экспедитором нашей компании по городу Омску</Typography>
                  </DeliveryBlock>
                  <DeliveryBlock>
                    <DeliveryTitle>
                      <DeliveryIcon>
                        <OpenedBox />
                      </DeliveryIcon>
                      Почта России
                    </DeliveryTitle>
                    <Typography variant="mini1">отправка товара через почту России</Typography>
                  </DeliveryBlock>
                </Col>
              </Row>
            </Container>
          </StyledCard>
        </StyledColCard>
      </Row>
    </Container>
  );
};
