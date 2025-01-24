import { promoSliderEnum } from '../constants';
import { BannerResponseType, BannerType } from '../types';

const getBannerType = (type: string) => {
  switch (type) {
    case '2':
      return promoSliderEnum.FILTER;
    case '1':
      return promoSliderEnum.PRODUCT;
    default:
      return promoSliderEnum.CATEGORY;
  }
};

export const mapBanners = (banners: BannerResponseType[]): BannerType[] =>
  banners.map((banner) => ({
    id: banner.banner_id,
    bannerText: banner.banner_text,
    buttonText: banner.button_text,
    type: getBannerType(banner.type),
    categoryId: Number(banner.category_id),
    productId: Number(banner.product_id),
    filter: banner.filter ?? '',
    image: banner.image,
    status: Number(banner.status),
    sortOrder: Number(banner.sort_order),
    dateAdded: banner.date_added,
    dateModified: banner.date_modified,
    backgroundColor: banner.background_color,
    textColor: banner.text_color,
    price: banner.price,
  }));
