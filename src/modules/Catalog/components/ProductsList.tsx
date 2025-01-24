import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from '../../../ui/components/Adaptive';
import { VIEW_MODE } from '../constants';
import { ProductCard } from '../modules/product';
import { ProductType, ViewModeType } from '../types';

type Props = {
  products: ProductType[];
  mode: ViewModeType;
  onChangeCount: (id: number, count: number) => Promise<void>;
  onChangeFavourite: (id: number, value: boolean) => Promise<void>;
  onChangeCompare: (id: number, value: boolean) => Promise<void>;
  getProductLink: (id: number) => string;
};

const StyledCol = styled(Col)`
  margin-bottom: 16px;
`;

export const ProductsList = ({
  products,
  mode,
  onChangeCount,
  onChangeFavourite,
  getProductLink,
  onChangeCompare,
}: Props) => {
  const lineModeValue = mode === VIEW_MODE.list && 12;

  return (
    <Container>
      <Row indent={8}>
        {products.map((product) => (
          <StyledCol
            key={product.id}
            mobile={lineModeValue || 12}
            tablet={lineModeValue || 6}
            desktopS={lineModeValue || 4}
          >
            <ProductCard
              mode={mode}
              product={product}
              onChangeCount={onChangeCount}
              onChangeFavourite={onChangeFavourite}
              onChangeCompare={onChangeCompare}
              getProductLink={getProductLink}
            />
          </StyledCol>
        ))}
      </Row>
    </Container>
  );
};
