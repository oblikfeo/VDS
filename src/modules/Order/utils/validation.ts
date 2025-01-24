import * as yup from 'yup';

import { CUSTOMER_FIELDS } from '../constants';

export const orderValidationSchema = yup.object().shape({
  [CUSTOMER_FIELDS.FIRST_NAME]: yup
    .string()
    .required('Введите имя')
    .max(32, 'Длинна имя не должна превышать 32 символов'),
  [CUSTOMER_FIELDS.LAST_NAME]: yup
    .string()
    .required('Введите фамилию')
    .max(32, 'Длинна фамилии не должна превышать 32 символов'),
  [CUSTOMER_FIELDS.PHONE_NUMBER]: yup.string().required('Введите номер телефона'),
  [CUSTOMER_FIELDS.EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
  [CUSTOMER_FIELDS.SHIPPING_METHOD]: yup.string().required('Выберите метод доставки'),
  [CUSTOMER_FIELDS.PAYMENT_METHOD]: yup.string().required('Выберите метод оплаты'),
});
