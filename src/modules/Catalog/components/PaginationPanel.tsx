import React, { memo } from 'react';

import { Pagination } from '../../../ui/components';

type Props = {
  total: number;
  page: number;
  setPage: (page: number) => void;
};

export const PaginationPanel = memo(({ total, page, setPage }: Props) => (
  <Pagination page={page} total={total} setPage={setPage} />
));

PaginationPanel.displayName = 'PaginationPanel';
