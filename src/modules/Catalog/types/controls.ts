export type ViewModeType = 'grid' | 'list';

export type SortType = 'name' | 'price';

export type SortMobileType = 'nameAsc' | 'nameDesc' | 'priceAsc' | 'priceDesc';

export type OrderType = 'ASC' | 'DESC';

export type SortMobileObjectType = { key: SortType; type: OrderType };
