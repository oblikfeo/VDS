import * as yup from 'yup';

const phoneRegExp = /\d{10}/;

export const validatePhone = () =>
  yup.string().required('Введите номер телефона').matches(phoneRegExp, 'Неверный номер телефона');

export const validateName = () =>
  yup.string().required('Введите имя').max(32, 'Длинна имя не должна превышать 32 символов');