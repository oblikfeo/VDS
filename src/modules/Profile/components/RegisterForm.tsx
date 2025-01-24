'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';

import { Field, FieldCheckbox, FieldMobile } from '../../../common/components/Field';
import { Button } from '../../../ui/components';
import { Container, Row, Col } from '../../../ui/components';
import { REGISTER_FIELDS } from '../constants';
import { RegisterFormValuesType } from '../types';
import { registerValidationSchema } from '../utils';

const registerInitialValues = {
  [REGISTER_FIELDS.FIRST_NAME]: '',
  [REGISTER_FIELDS.LAST_NAME]: '',
  [REGISTER_FIELDS.EMAIL]: '',
  [REGISTER_FIELDS.PHONE]: '',
  [REGISTER_FIELDS.NEW_PASSWORD]: '',
  [REGISTER_FIELDS.NEW_PASSWORD_CONFIRM]: '',
  [REGISTER_FIELDS.SUBSCRIBE_NEWS]: true,
  [REGISTER_FIELDS.ACCEPT_POLICY]: false,
};

const StyledButton = styled(Button.Contained)`
  margin-top: ${({ theme }) => theme.indents.l};
`;

type Props = {
  onSubmit: (values: RegisterFormValuesType) => void;
};
export const RegisterForm = ({ onSubmit }: Props) => {
  const handleSubmit = (values: RegisterFormValuesType) => {
    onSubmit(values);
  };

  return (
    <Formik initialValues={registerInitialValues} validationSchema={registerValidationSchema} onSubmit={handleSubmit}>
      <Form>
        <Container>
          <Row>
            <Col desktopS={6}>
              <Field validation name={REGISTER_FIELDS.FIRST_NAME} label="Имя" placeholder="Имя" type="text" />
            </Col>
            <Col desktopS={6}>
              <Field name={REGISTER_FIELDS.LAST_NAME} label="Фамилия" placeholder="Фамилия" type="text" />
            </Col>
            <Col desktopS={6}>
              <Field validation name={REGISTER_FIELDS.EMAIL} label="E-mail" placeholder="E-mail" type="email" />
            </Col>
            <Col desktopS={6}>
              <FieldMobile validation name={REGISTER_FIELDS.PHONE} label="Телефон" placeholder="Телефон" type="tel" />
            </Col>
            <Col desktopS={6}>
              <Field
                validation
                name={REGISTER_FIELDS.NEW_PASSWORD}
                label="Пароль"
                placeholder="Пароль"
                type="password"
              />
            </Col>
            <Col desktopS={6}>
              <Field
                validation
                name={REGISTER_FIELDS.NEW_PASSWORD_CONFIRM}
                label="Подтверждение пароля"
                placeholder="Подтверждение пароля"
                type="password"
              />
            </Col>
            <Col desktopS={6} />
          </Row>
          <Row>
            <Col>
              <FieldCheckbox
                name={REGISTER_FIELDS.SUBSCRIBE_NEWS}
                label="Получать новости"
                text="Вы будете получать на почту самые актуальные и выгодные предложения"
              />
            </Col>
            <Col>
              <FieldCheckbox
                validation
                name={REGISTER_FIELDS.ACCEPT_POLICY}
                label="Согласие с обработкой персональных данных и политикой конфиденциальности"
                text={
                  <>
                    Я прочитал&nbsp;
                    <a href="/policy" target="_blank">
                      Политика Безопасности
                    </a>{' '}
                    и согласен с условиями безопасности и обработки персональных данных
                  </>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <StyledButton type="submit">Продолжить</StyledButton>
            </Col>
          </Row>
        </Container>
      </Form>
    </Formik>
  );
};
