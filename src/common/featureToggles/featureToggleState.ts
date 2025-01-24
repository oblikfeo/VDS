import { USE_BUY_TOP, USE_COMPARE, USE_CONTACTS_FORM, USE_FAVORITES, USE_ORDER } from './featureToggleNames';

export const featureToggleState = {
  [USE_ORDER]: {
    enabled: true,
    description: 'Включает работу с корзиной и заказами',
  },
  [USE_FAVORITES]: {
    enabled: false,
    description: 'Включает работу с избранным',
  },
  [USE_COMPARE]: {
    enabled: false,
    description: 'Включает работу с сравнением',
  },
  [USE_CONTACTS_FORM]: {
    enabled: true,
    description: 'Включает отображение форм контакта с клиентами',
  },
  [USE_BUY_TOP]: {
    enabled: false,
    description: 'Включает лидеры продаж карусель на главной',
  },
};
