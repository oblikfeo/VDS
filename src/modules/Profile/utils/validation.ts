import * as yup from 'yup';

import { REGISTER_FIELDS, LOGIN_FIELDS, SETTINGS_FIELDS, FORGOT_FIELDS, RESET_FIELDS } from '../constants';

export const loginPhoneValidationSchema = yup.object().shape({
  [LOGIN_FIELDS.PHONE]: yup.string().required('Введите номер телефона'),
  [LOGIN_FIELDS.PASSWORD]: yup.string().required('Введите пароль'),
});

export const loginEmailValidationSchema = yup.object().shape({
  [LOGIN_FIELDS.EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
  [LOGIN_FIELDS.PASSWORD]: yup.string().required('Введите пароль'),
});

export const registerValidationSchema = yup.object().shape({
  [REGISTER_FIELDS.FIRST_NAME]: yup
    .string()
    .required('Введите имя')
    .max(32, 'Длинна имя не должна превышать 32 символов'),
  [REGISTER_FIELDS.LAST_NAME]: yup.string().max(32, 'Длинна фамилии не должна превышать 32 символов'),
  [REGISTER_FIELDS.EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
  [REGISTER_FIELDS.PHONE]: yup.string().required('Введите номер телефона'),
  [REGISTER_FIELDS.NEW_PASSWORD]: yup
    .string()
    .required('Введите пароль')
    .min(6, 'Длинна пароля не менее 6 символов')
    .max(30, 'Длинна пароля не должна превышать 30 символов'),
  [REGISTER_FIELDS.NEW_PASSWORD_CONFIRM]: yup
    .string()
    .required('Введите пароль повторно')
    .oneOf([yup.ref(REGISTER_FIELDS.NEW_PASSWORD)], 'Пароли не совпадают'),
  [REGISTER_FIELDS.ACCEPT_POLICY]: yup.boolean().oneOf([true], 'Нужно соглашение с политикой конфиденциальности'),
});

export const settingsValidationSchema = yup.object().shape({
  [SETTINGS_FIELDS.FIRST_NAME]: yup
    .string()
    .required('Введите имя')
    .max(32, 'Длинна имя не должна превышать 32 символов'),
  [SETTINGS_FIELDS.LAST_NAME]: yup.string().max(32, 'Длинна фамилии не должна превышать 32 символов'),
  [SETTINGS_FIELDS.EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
  [SETTINGS_FIELDS.PHONE]: yup.string().required('Введите номер телефона'),
  [SETTINGS_FIELDS.NEW_PASSWORD]: yup.string().max(30, 'Длинна пароля не должна превышать 30 символов'),
  [SETTINGS_FIELDS.NEW_PASSWORD_CONFIRM]: yup
    .string()
    .oneOf([yup.ref(SETTINGS_FIELDS.NEW_PASSWORD)], 'Пароли не совпадают'),
});

export const forgotValidationSchema = yup.object().shape({
  [FORGOT_FIELDS.EMAIL]: yup.string().email('Неправильный email').required('Введите email'),
});

export const resetValidationSchema = yup.object().shape({
  [RESET_FIELDS.NEW_PASSWORD]: yup.string().max(30, 'Длинна пароля не должна превышать 30 символов'),
  [RESET_FIELDS.NEW_PASSWORD_CONFIRM]: yup
    .string()
    .oneOf([yup.ref(SETTINGS_FIELDS.NEW_PASSWORD)], 'Пароли не совпадают'),
});
