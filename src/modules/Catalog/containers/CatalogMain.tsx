'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { OrderType, ProductsTypeResponse, SortType } from '@modules/Catalog/types';
import { generateQueryParamsString } from '@modules/Catalog/utils/nav';

import { PageTitle } from '../../../layouts/Lampastar';
import { ProductsList, ControlPanel, PaginationPanel } from '../components';
import { ORDER_TYPE, SORT_TYPE, VIEW_MODE } from '../constants';
import { useProductActions } from '../hooks';

type Props = {
  productInitialData?: ProductsTypeResponse;
  search?: string;
  tag?: string;
  page?: number;
  sort?: SortType;
  order?: OrderType;
};

const CatalogContainer = styled.div`
  display: flex;
`;

const FiltersContainer = styled.div`
  min-width: 264px;
  width: 264px;
  margin-right: ${({ theme }) => theme.indents.l};
`;

const ProductsContainer = styled.div`
  flex-grow: 1;
`;

const ControlContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const PaginationContainer = styled.div``;

export const CatalogMain = ({
  search,
  tag,
  page = 1,
  sort = SORT_TYPE.price,
  order = ORDER_TYPE.ASC,
  productInitialData,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [viewMode, setViewMode] = useState(VIEW_MODE.grid);

  const totalPage = Math.ceil((productInitialData?.total || 0) / 18);

  const { handleChangeFavourite, handleChangeCompare, handleChangeBasketCount, getProductLink } = useProductActions();

  const setSortOrder = useCallback(
    (valueSort: SortType, valueOrder: OrderType) => {
      const paramsString = generateQueryParamsString({ sort: valueSort, order: valueOrder, search, tag });

      router.push(`${pathname}?${paramsString}`);
    },
    [pathname, router],
  );

  const setPage = (newPage: number) => {
    const paramsString = generateQueryParamsString({ sort, order, search, tag });

    router.push(`/catalog/search/${newPage}?${paramsString}`);
  };

  const getProductsJSX = () => {
    if (!productInitialData?.list) return <>Ничего не найдено</>;

    return (
      <ProductsList
        products={productInitialData?.list}
        mode={viewMode}
        onChangeCount={handleChangeBasketCount}
        onChangeFavourite={handleChangeFavourite}
        onChangeCompare={handleChangeCompare}
        getProductLink={getProductLink}
      />
    );
  };

  return (
    <>
      <PageTitle>{search || 'Каталог'}</PageTitle>
      <CatalogContainer>
        <FiltersContainer />
        <ProductsContainer>
          <ControlContainer>
            <ControlPanel
              sortType={sort}
              orderType={order}
              viewMode={viewMode}
              setSortOrder={setSortOrder}
              setViewMode={setViewMode}
            />
          </ControlContainer>
          {getProductsJSX()}
          <PaginationContainer>
            <PaginationPanel page={page} total={totalPage} setPage={setPage} />
          </PaginationContainer>
        </ProductsContainer>
      </CatalogContainer>
    </>
  );
};
