'use client';

import { useCallback, useContext, useEffect } from 'react';

import { FiltersContext } from '../../../common/context';
import { useMediaQuery } from '../../../ui/hooks/useMediaQuery';

export const useControlAndFilters = () => {
  const isMobile = useMediaQuery({ maxWidth: 'tablet' });
  const { filtersIsOpened, setFiltersIsOpened } =
    useContext<{
      filtersIsOpened: boolean;
      setFiltersIsOpened: (value: boolean) => void;
    } | null>(FiltersContext) || {};

  useEffect(() => {
    if (isMobile) {
      setFiltersIsOpened?.(false);
    } else {
      setFiltersIsOpened?.(true);
    }
  }, [isMobile, setFiltersIsOpened]);

  const openFilters = useCallback(() => setFiltersIsOpened?.(true), [setFiltersIsOpened]);
  const closeFilters = useCallback(() => setFiltersIsOpened?.(false), [setFiltersIsOpened]);

  return { isShowedFilters: !!filtersIsOpened, openFilters, closeFilters };
};
