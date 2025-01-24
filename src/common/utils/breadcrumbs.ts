import { BreadcrumbType } from '../types/breadcrumbs';

export const getCategoriesBreadcrumbs = (breadcrumbs: BreadcrumbType[]) =>
  breadcrumbs.map(({ categoryId, name }) => ({ path: `/catalog/${categoryId}/1`, label: name }));
