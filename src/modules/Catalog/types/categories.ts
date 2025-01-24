export type CategoryType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  image: string;
  metaDescription: string;
  metaKeyword: string;
  metaTitle: string;
  name: string;
  parentId: number;
  sortOrder: number;
  status: string;
};

export type CategoryMap = {
  id: number;
  name: string;
  list: CategoryMap[];
};
