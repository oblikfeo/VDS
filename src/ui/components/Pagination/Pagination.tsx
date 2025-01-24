import React, { memo } from 'react';

import { PageButton, PaginationContainer } from './styled';

type Props = {
  page: number;
  total: number;
  setPage: (page: number) => void;
};

const getPages = (page: number, total: number) => {
  let minValue = page - 5;
  let maxValue = page + 5;
  let difference = 0;

  if (minValue < 1) {
    difference = minValue * -1 + 1;
    minValue = 1;
  }

  maxValue += difference;

  if (maxValue > total) {
    difference = maxValue - total;
    maxValue = total;
  }

  if (minValue > 1 && difference > 0) {
    minValue -= difference;
  }

  if (minValue < 1) minValue = 1;

  const result = [];

  // eslint-disable-next-line no-plusplus
  for (let i = minValue; i <= maxValue; i++) {
    result.push(i);
  }

  return result;
};

export const Pagination = memo(({ page, total, setPage }: Props) => {
  const pages = getPages(page, total);
  const showFirst = pages?.[0] > 1;
  const showLast = pages?.[pages.length - 1] < total;

  return (
    <PaginationContainer>
      {showFirst && <PageButton onClick={() => setPage(1)}>В начало</PageButton>}
      {pages.map((pageNumber) => (
        <PageButton key={pageNumber} onClick={() => setPage(pageNumber)} disabled={pageNumber === page} grow>
          {pageNumber}
        </PageButton>
      ))}
      {showLast && <PageButton onClick={() => setPage(total)}>В конец</PageButton>}
    </PaginationContainer>
  );
});

Pagination.displayName = 'Pagination';
