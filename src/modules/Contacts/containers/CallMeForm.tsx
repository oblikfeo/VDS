import { Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import React from 'react';
import styled from 'styled-components';

import {Field, FieldMobile} from '../../../common/components/Field';
import { adaptive, ButtonContained } from '../../../ui/components';
import {MESSAGE_FIELDS, TELEPHONE_FIELD} from '../constants';
import { useContacts } from '../hooks';
import { CallMeFormValuesType } from '../types';
import { callMeValidationSchema } from '../utils';
import {NameContainer} from "@modules/Contacts/components/ContactForm";

export const CallForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CallMeFormBottom = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const CallMeFormPersonal = styled.span`
  ${({ theme }) => theme.typography.bodyCTT};
  color: ${({ theme }) => theme.color.text.secondary};
`;

const initialValues = {
  [TELEPHONE_FIELD]: '',
};

export const MobileSubmitButton = styled(ButtonContained)`
  width: max-content;
  padding: 0 37px;
`;

export const CallMeForm = () => {
  const { sendCallMe } = useContacts();

  const onSubmitHandler = (values: CallMeFormValuesType, { resetForm }: FormikHelpers<CallMeFormValuesType>) => {
    sendCallMe(values).then((data) => data?.success && resetForm());
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandler} validationSchema={callMeValidationSchema}>
      <Form>
        <CallForm>
          <NameContainer>
            <Field name={MESSAGE_FIELDS.NAME} placeholder="Ваше имя" validation />
          </NameContainer>
          <FieldMobile name={TELEPHONE_FIELD} placeholder="+7(___)___-__-__" validation />
          <CallMeFormBottom>
            <CallMeFormPersonal>Нажимая кнопку «Отправить»,<br/>Вы даете свое согласие на обработку персональных данных.</CallMeFormPersonal>
            <MobileSubmitButton>Отправить</MobileSubmitButton>
          </CallMeFormBottom>
        </CallForm>
      </Form>
    </Formik>
  );
};
