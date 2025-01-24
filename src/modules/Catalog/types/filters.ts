export type FilterTypeType = number;

export type FilterValueBetweenType = {
  min: number;
  max: number;
};

export type FilterValueSelectType = {
  id: number;
  title: string;
};

type FilterValueType = FilterValueBetweenType | FilterValueSelectType[];

export type FilterType<U = FilterValueType, K = number> = {
  id: K;
  title: string;
  type: FilterTypeType;
  value: U;
};

export type FiltersResponseType = {
  list?: FilterType[];
  priceLimits: FilterValueBetweenType;
};

export type FiltersValuesType = Record<string, { values: string[]; between?: boolean }>;
