export enum ImageSizeEnum {
  s = 's',
  m = 'm',
  x = 'x',
  y = 'y',
  z = 'z',
  w = 'w',
  o = 'o',
  p = 'p',
  q = 'q',
  r = 'r',
}

export type NewsImageType = {
  id: number;
  imageId: number;
  newsId: number;
  type: string;
  url: string;
  width: number;
  height: number;
};

export type ImageSizeLineType = Partial<Record<ImageSizeEnum, NewsImageType>>;

export type NewsItemType = {
  id: number;
  outerId: number;
  dateAdded: string;
  text: string;
  title: string;
  mainImageId?: number;
  images: ImageSizeLineType[];
};

export type NewsResponseType = {
  list?: NewsItemType[];
  total?: number;
};
