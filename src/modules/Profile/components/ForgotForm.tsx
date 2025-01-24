'use client';

import { Form, Formik } from 'formik';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import { Field } from '../../../common/components/Field';
import { Button, Typography } from '../../../ui/components';
import { FORGOT_FIELDS, RESET_FIELDS } from '../constants';
import { useForgot } from '../hooks';
import { ForgotFormValuesType, ResetFormValuesType } from '../types';
import { forgotValidationSchema, resetValidationSchema } from '../utils';

type Props = {
  goToLogin: () => void;
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.indents.m};
`;

const forgotInitialValues = {
  [FORGOT_FIELDS.EMAIL]: '',
};

const resetInitialValues = {
  [RESET_FIELDS.NEW_PASSWORD]: '',
  [RESET_FIELDS.NEW_PASSWORD_CONFIRM]: '',
};

export const ForgotForm = ({ goToLogin }: Props) => {
  const searchParams = useSearchParams();

  const code = searchParams.get('code');

  const { isLoading, isSuccessRequestCode, isSuccessReset, handleReset, isErrorCheck, isSuccessCheck, handleRequest } =
    useForgot(code);
  const onSubmit = (values: ForgotFormValuesType) => {
    handleRequest(values[FORGOT_FIELDS.EMAIL]);
  };

  const onSubmitReset = (values: ResetFormValuesType) => {
    handleReset(values);
  };

  if (isLoading) return <>ЗАГРУЗКА...</>;

  if (isErrorCheck) return <>Ссылка для сброса пароля неправильная или устарела</>;

  if (isSuccessReset)
    return (
      <>
        Пароль успешно изменен, попробуйте воспользоваться формой авторизации
        <Button.Text onClick={goToLogin}>Войти</Button.Text>
      </>
    );

  if (isSuccessCheck)
    return (
      <Formik initialValues={resetInitialValues} validationSchema={resetValidationSchema} onSubmit={onSubmitReset}>
        <Form>
          <Typography>Введите новый пароль и повторно для подтверждения</Typography>
          <Field name={RESET_FIELDS.NEW_PASSWORD} placeholder="Пароль" validation />
          <Field name={RESET_FIELDS.NEW_PASSWORD_CONFIRM} placeholder="Подтверждение пароля" validation />
          <ButtonContainer>
            <Button.Contained type="submit" disabled={isLoading}>
              Сменить пароль
            </Button.Contained>
          </ButtonContainer>
        </Form>
      </Formik>
    );

  if (isSuccessRequestCode)
    return (
      <>
        Ссылка для восстановления пароля была отправлена на указанный Email
        <Button.Text onClick={goToLogin}>Войти</Button.Text>
      </>
    );

  return (
    <Formik initialValues={forgotInitialValues} validationSchema={forgotValidationSchema} onSubmit={onSubmit}>
      <Form>
        <Typography>
          Введите адрес электронной почты для отправки на него инструкции по восстановлению пароля
        </Typography>
        <Field name={FORGOT_FIELDS.EMAIL} placeholder="E-mail" type="text" validation />
        <ButtonContainer>
          <Button.Contained type="submit" disabled={isLoading}>
            Восстановить
          </Button.Contained>
          <Button.Text onClick={goToLogin} disabled={isLoading}>
            Войти
          </Button.Text>
        </ButtonContainer>
      </Form>
    </Formik>
  );
};
