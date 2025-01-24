'use client';

import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { getCategoriesBreadcrumbs } from '@common/utils/breadcrumbs';
import { generateQueryParamsString } from '@modules/Catalog/utils/nav';
import { Breadcrumbs } from '@ui/components/Breadcrumbs';

import { PageTitle } from '../../../layouts/Lampastar/components/PageTitle';
import { adaptive } from '../../../ui/components';
import { ProductsList, ProductsFilters, ControlPanel, PaginationPanel } from '../components';
import { VIEW_MODE } from '../constants';
import { useCategories, useControlAndFilters, useFilters, useProductActions, useProducts } from '../hooks';
import { FiltersValuesType, OrderType, ProductsTypeResponse, SortType } from '../types';

type Props = {
  categoryId: number;
  page: number;
  productInitialData?: ProductsTypeResponse;
  filtersValues: FiltersValuesType;
  sort: SortType;
  order: OrderType;
};

const CatalogContainer = styled.div`
  display: flex;

  ${adaptive.maxWidth.tablet} {
    flex-direction: column;
  }
`;

const FiltersContainer = styled.div`
  min-width: 264px;
  width: 264px;
  margin-right: ${({ theme }) => theme.indents.l};

  ${adaptive.maxWidth.tablet} {
    width: 100%;
  }
`;

const ProductsContainer = styled.div`
  flex-grow: 1;
`;

const ControlContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.m};
`;

const PaginationContainer = styled.div``;

export const CatalogCategory = ({ categoryId, page, productInitialData, filtersValues, sort, order }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [viewMode, setViewMode] = useState(VIEW_MODE.grid);

  const { isLoading, category, currentList, notFound } = useCategories({ categoryId, parentId: categoryId });

  const {
    list: products,
    breadcrumbs,
    totalPage,
  } = useProducts({ category: categoryId, initialData: productInitialData });
  const { getProductLink, handleChangeFavourite, handleChangeCompare, handleChangeBasketCount } = useProductActions();
  const { list: filters, priceLimits } = useFilters(categoryId);

  const { isShowedFilters, openFilters, closeFilters } = useControlAndFilters();

  const isLoadingFilters = false;

  const { name: categoryName } = category || {};

  const setFiltersValues = useCallback(
    (values: FiltersValuesType) => {
      const paramsString = generateQueryParamsString({ filters: values, sort, order });

      router.push(`${pathname}?${paramsString}`);
    },
    [order, pathname, router, sort],
  );

  const setSortOrder = useCallback(
    (valueSort: SortType, valueOrder: OrderType) => {
      const paramsString = generateQueryParamsString({ filters: filtersValues, sort: valueSort, order: valueOrder });

      router.push(`${pathname}?${paramsString}`);
    },
    [filtersValues, pathname, router],
  );

  const onClickCategory = (id: number) => {
    setFiltersValues({});

    router.push(`/catalog/${id}/1`);
  };

  const setPage = (newPage: number) => {
    const paramsString = generateQueryParamsString({ filters: filtersValues, sort, order });

    router.push(`/catalog/${categoryId}/${newPage}?${paramsString}`);
  };

  const getProductsJSX = () => (
    // if (isLoadingProducts) return <ProductsListSkeleton />;

    <ProductsList
      products={products}
      mode={viewMode}
      onChangeCount={handleChangeBasketCount}
      onChangeFavourite={handleChangeFavourite}
      onChangeCompare={handleChangeCompare}
      getProductLink={getProductLink}
    />
  );
  const getProductsFiltersJSX = () => {
    if (isLoadingFilters) return <>Filters skeleton</>;

    return (
      <ProductsFilters
        filters={filters}
        categories={currentList}
        categoryId={categoryId}
        onClickCategory={onClickCategory}
        showFilters={isShowedFilters}
        closeFilters={closeFilters}
        setFilters={setFiltersValues}
        priceLimits={priceLimits}
        filtersValues={filtersValues}
      />
    );
  };

  if (!isLoading && notFound) return <>NOT FOUND</>;

  return (
    <>
      <Breadcrumbs items={[...getCategoriesBreadcrumbs(breadcrumbs)]} />
      <PageTitle>{categoryName}</PageTitle>
      <CatalogContainer>
        <FiltersContainer>{getProductsFiltersJSX()}</FiltersContainer>
        <ProductsContainer>
          <ControlContainer>
            <ControlPanel
              sortType={sort}
              orderType={order}
              viewMode={viewMode}
              setSortOrder={setSortOrder}
              setViewMode={setViewMode}
              openFilters={openFilters}
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
