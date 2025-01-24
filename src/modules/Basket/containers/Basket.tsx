import React from 'react';
import styled from 'styled-components';

import { getSidebarMargin, MIN_SIDEBAR_WIDTH } from '../../../layouts/Lampastar';
import { adaptive } from '../../../ui/components';
import { useProductActions } from '../../Catalog/hooks';
import { BasketTotal, ProductCard } from '../components';
import { ProductLIstSkeleton } from '../components/skeletons';
import { useBasket } from '../hooks';

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  ${adaptive.maxWidth.tablet} {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ProductListContainer = styled.div`
  flex-grow: 1;
`;

const SidebarContainer = styled.div`
  margin-left: ${getSidebarMargin};
  min-width: ${MIN_SIDEBAR_WIDTH};

  ${adaptive.maxWidth.tablet} {
    margin-left: unset;
  }
`;

export const Basket = () => {
  const { list, basket, isLoading } = useBasket();
  const { handleChangeBasketCount, handleChangeFavourite, handleChangeCompare, handleClickCard } = useProductActions();

  const renderList = () => {
    if (isLoading) return <ProductLIstSkeleton />;

    if (!list.length) return <>Выша корзина пуста, сначала добавьте товары</>;

    return list.map((item) => (
      <ProductCard
        key={item.id}
        product={item}
        onClickCard={handleClickCard}
        onChangeCount={handleChangeBasketCount}
        onChangeCompare={handleChangeCompare}
        onChangeFavourite={handleChangeFavourite}
      />
    ));
  };

  return (
    <Container>
      <ProductListContainer>{renderList()}</ProductListContainer>
      <SidebarContainer>
        <BasketTotal total={basket?.total} disabled={!list.length} />
      </SidebarContainer>
    </Container>
  );
};
