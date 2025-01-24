import React from 'react';

import { Field, FieldCheckbox, FieldMobile } from '../../../common/components/Field';
import { Col, Container, Row } from '../../../ui/components';
import { SETTINGS_FIELDS } from '../constants';

export const SettingsForm = () => (
  <Container>
    <Row>
      <Col desktopS={6}>
        <Field name={SETTINGS_FIELDS.FIRST_NAME} placeholder="Имя" validation />
      </Col>
      <Col desktopS={6}>
        <Field name={SETTINGS_FIELDS.LAST_NAME} placeholder="Фамилия" validation />
      </Col>
      <Col desktopS={6}>
        <Field name={SETTINGS_FIELDS.EMAIL} placeholder="E-mail" validation />
      </Col>
      <Col desktopS={6}>
        <FieldMobile name={SETTINGS_FIELDS.PHONE} placeholder="Номер телефона" validation />
      </Col>
      <Col desktopS={6}>
        <Field name={SETTINGS_FIELDS.NEW_PASSWORD} placeholder="Пароль" validation />
      </Col>
      <Col desktopS={6}>
        <Field name={SETTINGS_FIELDS.NEW_PASSWORD_CONFIRM} placeholder="Подтверждение пароля" validation />
      </Col>
      <Col>
        <FieldCheckbox name={SETTINGS_FIELDS.SUBSCRIBE_NEWS} text="Получать новости компании" />
      </Col>
    </Row>
  </Container>
);
