import { OrderType, SortMobileObjectType, SortMobileType, SortType, ViewModeType } from '../types';

export const VIEW_MODE: Record<ViewModeType, ViewModeType> = {
  grid: 'grid',
  list: 'list',
};

export const SORT_TYPE: Record<SortType, SortType> = {
  name: 'name',
  price: 'price',
};

export const SORT_MOBILE_TYPE: Record<SortMobileType, SortMobileObjectType> = {
  nameAsc: { key: 'name', type: 'ASC' },
  nameDesc: { key: 'name', type: 'DESC' },
  priceAsc: { key: 'price', type: 'ASC' },
  priceDesc: { key: 'price', type: 'DESC' },
};

export const ORDER_TYPE: Record<OrderType, OrderType> = {
  ASC: 'ASC',
  DESC: 'DESC',
};
