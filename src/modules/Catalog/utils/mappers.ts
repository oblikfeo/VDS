import { BasketProductsQuantityType } from '../../../common/types';
import { CategoryMap, CategoryType, ProductType } from '../types';

export const getCategoriesRecursive = (
  list: CategoryType[],
  currentParentId = 0,
  maxDepth = 2,
  depth = 0,
): CategoryMap[] =>
  list
    .filter(({ parentId }) => parentId === currentParentId)
    .map(({ id, name }) => ({
      id,
      name,
      list: maxDepth === -1 || depth <= maxDepth ? getCategoriesRecursive(list, id, maxDepth, depth + 1) : [],
    }));

export const mapProducts = (list: ProductType[], basket: BasketProductsQuantityType) =>
  list.map(({ ...data }) => ({ ...data, basketQuantity: basket[data.id]?.quantity }));
