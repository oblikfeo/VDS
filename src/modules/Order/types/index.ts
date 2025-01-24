import { CustomerType } from '../../../common/types';
import { BasketProduct } from '../../Basket';
import { CUSTOMER_FIELDS } from '../constants';

export type OrderDataResponse = {
  products: BasketProduct[];
  basket: {
    total: number;
  };
  customer: CustomerType;
  shippingMethods: null;
  paymentMethods: null;
};

export type OrderFormValuesType = {
  [CUSTOMER_FIELDS.I_AM_CUSTOMER]: boolean;
  [CUSTOMER_FIELDS.FIRST_NAME]: string;
  [CUSTOMER_FIELDS.LAST_NAME]: string;
  [CUSTOMER_FIELDS.PHONE_NUMBER]: string;
  [CUSTOMER_FIELDS.EMAIL]: string;
  [CUSTOMER_FIELDS.SHIPPING_METHOD]: string;
  [CUSTOMER_FIELDS.PAYMENT_METHOD]: string;
};

export type TempCustomerType = {
  [CUSTOMER_FIELDS.FIRST_NAME]: string;
  [CUSTOMER_FIELDS.LAST_NAME]: string;
  [CUSTOMER_FIELDS.PHONE_NUMBER]: string;
  [CUSTOMER_FIELDS.EMAIL]: string;
};

export type CreateOrderData = {
  id: string;
  status: string;
};
