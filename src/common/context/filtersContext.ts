'use client';

import { createContext } from 'react';

export const FiltersContext = createContext<{
  filtersIsOpened: boolean;
  setFiltersIsOpened: (value: boolean) => void;
} | null>(null);
