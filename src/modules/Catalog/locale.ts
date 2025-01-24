import { SORT_MOBILE_TYPE, SORT_TYPE } from './constants';

export const locale = {
  sortOrder: {
    [SORT_TYPE.name]: 'наименование',
    [SORT_TYPE.price]: 'цена',
    [SORT_MOBILE_TYPE.nameAsc.key + SORT_MOBILE_TYPE.nameAsc.type]: 'Наименование по возрастанию',
    [SORT_MOBILE_TYPE.nameDesc.key + SORT_MOBILE_TYPE.nameDesc.type]: 'Наименование по убыванию',
    [SORT_MOBILE_TYPE.priceAsc.key + SORT_MOBILE_TYPE.priceAsc.type]: 'Цена по возрастанию',
    [SORT_MOBILE_TYPE.priceDesc.key + SORT_MOBILE_TYPE.priceDesc.type]: 'Цена по убыванию',
  },
};
