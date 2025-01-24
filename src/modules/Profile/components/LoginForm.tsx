'use client';

import { Omit } from '@reduxjs/toolkit/dist/tsHelpers';
import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

import { Field, FieldMobile } from '../../../common/components/Field';
import { Button, Tab } from '../../../ui/components';
import { LOGIN_FIELDS } from '../constants';
import { LoginFormValuesType } from '../types';
import { loginEmailValidationSchema, loginPhoneValidationSchema } from '../utils';

const loginInitialValues = {
  [LOGIN_FIELDS.EMAIL]: '',
  [LOGIN_FIELDS.PHONE]: '',
  [LOGIN_FIELDS.PASSWORD]: '',
};

type FormPhoneProps = {
  onSubmit: (data: Omit<LoginFormValuesType, LOGIN_FIELDS.EMAIL>) => void;
  forgotPassword: () => void;
};

type FormEmailProps = {
  onSubmit: (data: Omit<LoginFormValuesType, LOGIN_FIELDS.PHONE>) => void;
  forgotPassword: () => void;
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.indents.m};
`;

export const LoginPhoneForm = ({ onSubmit, forgotPassword }: FormPhoneProps) => {
  const handleSubmit = (values: LoginFormValuesType) => {
    const { [LOGIN_FIELDS.EMAIL]: email, ...data } = values;

    onSubmit(data);
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginPhoneValidationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Tab>
            <FieldMobile
              showValidationMark={false}
              validation
              name={LOGIN_FIELDS.PHONE}
              label="Телефон"
              placeholder="Телефон"
              type="tel"
            />
            <Field
              showValidationMark={false}
              validation
              name={LOGIN_FIELDS.PASSWORD}
              label="Пароль"
              placeholder="Пароль"
              type="password"
            />
            <ButtonContainer>
              <Button.Contained type="submit">Войти</Button.Contained>
              <Button.Text onClick={forgotPassword}>Восстановить пароль</Button.Text>
            </ButtonContainer>
          </Tab>
        </Form>
      )}
    </Formik>
  );
};

export const LoginEmailForm = ({ onSubmit, forgotPassword }: FormEmailProps) => {
  const handleSubmit = (values: LoginFormValuesType) => {
    const { [LOGIN_FIELDS.PHONE]: telephone, ...data } = values;

    onSubmit(data);
  };

  return (
    <Formik initialValues={loginInitialValues} validationSchema={loginEmailValidationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Tab>
            <Field
              showValidationMark={false}
              validation
              name={LOGIN_FIELDS.EMAIL}
              label="E-mail"
              placeholder="E-mail"
              type="text"
            />
            <Field
              showValidationMark={false}
              validation
              name={LOGIN_FIELDS.PASSWORD}
              label="Пароль"
              placeholder="Пароль"
              type="password"
            />
            <ButtonContainer>
              <Button.Contained type="submit">Войти</Button.Contained>
              <Button.Text onClick={forgotPassword}>Восстановить пароль</Button.Text>
            </ButtonContainer>
          </Tab>
        </Form>
      )}
    </Formik>
  );
};
