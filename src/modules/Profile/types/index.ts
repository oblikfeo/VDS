import { FORGOT_FIELDS, LOGIN_FIELDS, REGISTER_FIELDS, RESET_FIELDS, SETTINGS_FIELDS } from '../constants';

export type RegisterFormValuesType = {
  [REGISTER_FIELDS.FIRST_NAME]: string;
  [REGISTER_FIELDS.LAST_NAME]: string;
  [REGISTER_FIELDS.EMAIL]: string;
  [REGISTER_FIELDS.PHONE]: string;
  [REGISTER_FIELDS.NEW_PASSWORD]: string;
  [REGISTER_FIELDS.NEW_PASSWORD_CONFIRM]: string;
  [REGISTER_FIELDS.SUBSCRIBE_NEWS]: boolean;
  [REGISTER_FIELDS.ACCEPT_POLICY]: boolean;
};

export type LoginFormValuesType = {
  [LOGIN_FIELDS.EMAIL]: string;
  [LOGIN_FIELDS.PHONE]: string;
  [LOGIN_FIELDS.PASSWORD]: string;
};

export type SettingsFormValuesType = {
  [SETTINGS_FIELDS.FIRST_NAME]: string;
  [SETTINGS_FIELDS.LAST_NAME]: string;
  [SETTINGS_FIELDS.EMAIL]: string;
  [SETTINGS_FIELDS.PHONE]: string;
  [SETTINGS_FIELDS.NEW_PASSWORD]: string;
  [SETTINGS_FIELDS.NEW_PASSWORD_CONFIRM]: string;
  [SETTINGS_FIELDS.SUBSCRIBE_NEWS]: boolean;
};

export type ForgotFormValuesType = {
  [FORGOT_FIELDS.EMAIL]: string;
};

export type ResetFormValuesType = {
  [RESET_FIELDS.NEW_PASSWORD]: string;
  [RESET_FIELDS.NEW_PASSWORD_CONFIRM]: string;
};

export type ProductType = {
  id: number;
  model: string;
  name: string;
  orderId: number;
  price: number;
  productId: number;
  quantity: number;
  reward: string;
  tax: string;
  total: number;
  image?: string;
};

export type OrderType = {
  id: number;
  currencyCode: string;
  currencyValue: number;
  dateAdded: string;
  firstname: string;
  lastname: string;
  status: string;
  total: number;
  products: ProductType[];
};

export type OrdersResponseType = {
  list: OrderType[];
  total: number;
};
