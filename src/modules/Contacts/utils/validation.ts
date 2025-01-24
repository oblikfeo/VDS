import * as yup from 'yup';

import { validatePhone, validateName } from '../../../common/utils';
import { MESSAGE_FIELDS, TELEPHONE_FIELD } from '../constants';

export const messageValidationSchema = yup.object().shape({
  [MESSAGE_FIELDS.NAME]: validateName(),
  [MESSAGE_FIELDS.EMAIL]: yup.string().required('Введите email').email('Неправильный email'),
  [MESSAGE_FIELDS.MESSAGE]: yup.string().required('Введите сообщение'),
  [MESSAGE_FIELDS.AGREE]: yup.boolean().oneOf([true], 'Нужно согласие'),
});
export const callMeValidationSchema = yup.object().shape({
  [MESSAGE_FIELDS.NAME]: validateName(),
  [TELEPHONE_FIELD]: validatePhone(),
});
