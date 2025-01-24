import React, { MutableRefObject, useEffect, useRef } from 'react';

import { YANDEX_API_KEY, YANDEX_COORDINATES } from '../../constants';

type Props = {
  width?: number | string;
  height?: number;
};

const YA_MAPS_ID = 'YA_MAPS_ID';

const loadMaps = async (onLoad: () => void) => {
  const existingScript = document.getElementById(YA_MAPS_ID);

  if (existingScript) return onLoad();

  const script = document.createElement('script');
  script.src = `https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_API_KEY}&lang=ru_RU`;
  script.async = true;
  script.onload = onLoad;
  script.id = YA_MAPS_ID;

  document.body.appendChild(script);

  return '';
};

const initMap = (ref: MutableRefObject<any>) => {
  if (ref.current) return;

  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  ref.current = new ymaps.Map(
    'map_container_contacts',
    {
      center: YANDEX_COORDINATES.center,
      zoom: YANDEX_COORDINATES.zoom,
    },
    {
      searchControlProvider: 'yandex#search',
    },
  );

  // @ts-ignore
  const mark = new ymaps.Placemark(YANDEX_COORDINATES.center);

  ref.current.geoObjects.add(mark);
};

export const YaMap = ({ width, height }: Props) => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    loadMaps(() => {
      // @ts-ignore
      window?.ymaps?.ready(() => initMap(mapRef));
    });
    return () => {
      mapRef.current?.destroy();
    };
  }, []);
  return <div style={{ width, height }} id="map_container_contacts" />;
};
