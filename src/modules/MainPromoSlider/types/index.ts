import { promoSliderEnum } from '../constants';

export type BannerResponseType = {
  banner_id: string;
  banner_text: string;
  button_text: string;
  type: string;
  category_id: string;
  product_id: string;
  filter: string | null;
  image: string;
  sort_order: string;
  status: string;
  date_added: string;
  date_modified: string;
  price?: number;
  background_color: string;
  text_color: string;
};

export type BannersResponseType = {
  list: BannerResponseType[];
  total: number;
};

export type BannerType = {
  id: string;
  bannerText: string;
  buttonText: string;
  type: promoSliderEnum;
  categoryId: number;
  productId: number;
  filter: string;
  image: string;
  sortOrder: number;
  status: number;
  dateAdded: string;
  dateModified: string;
  backgroundColor: string;
  textColor: string;
  price?: number;
};
