import React from 'react';

import { NewsItem } from './NewsItem';
import { ImageSizeEnum, NewsItemType } from '../types';

type Props = {
  list: NewsItemType[];
  onClick: (id: number) => void;
};
export const NewsList = ({ list, onClick }: Props) => (
  <>
    {list.map((item) => (
      <NewsItem key={item.id} item={item} onClick={onClick} imageType={ImageSizeEnum.p} />
    ))}
  </>
);
