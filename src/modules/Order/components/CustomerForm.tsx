import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';

import { OrderColumn } from './OrderColumn';
import { Field, FieldCheckbox, FieldMobile } from '../../../common/components/Field';
import { Col, Container, Row, Typography } from '../../../ui/components';
import { CUSTOMER_FIELDS } from '../constants';
import { OrderFormValuesType, TempCustomerType } from '../types';

const tempCustomerInitialState = {
  [CUSTOMER_FIELDS.FIRST_NAME]: '',
  [CUSTOMER_FIELDS.LAST_NAME]: '',
  [CUSTOMER_FIELDS.PHONE_NUMBER]: '',
  [CUSTOMER_FIELDS.EMAIL]: '',
};

type Props = {
  initialState: TempCustomerType;
  showIAmCustomer: boolean;
};

export const CustomerForm = ({ initialState, showIAmCustomer }: Props) => {
  const { values, setValues, getFieldMeta } = useFormikContext<OrderFormValuesType>();
  const [tempCustomer, setTempCustomer] = useState<TempCustomerType>(tempCustomerInitialState);

  const disabledFields = values[CUSTOMER_FIELDS.I_AM_CUSTOMER] && showIAmCustomer;

  useEffect(() => {
    const fieldFirstNameMeta = getFieldMeta(CUSTOMER_FIELDS.FIRST_NAME);
    const fieldLastNameMeta = getFieldMeta(CUSTOMER_FIELDS.LAST_NAME);
    const fieldEmailMeta = getFieldMeta(CUSTOMER_FIELDS.EMAIL);
    const fieldPhoneMeta = getFieldMeta(CUSTOMER_FIELDS.PHONE_NUMBER);

    if (values[CUSTOMER_FIELDS.I_AM_CUSTOMER]) {
      if (fieldFirstNameMeta.touched || fieldLastNameMeta.touched || fieldEmailMeta.touched || fieldPhoneMeta.touched) {
        const newTempValues = {
          [CUSTOMER_FIELDS.FIRST_NAME]: values[CUSTOMER_FIELDS.FIRST_NAME],
          [CUSTOMER_FIELDS.LAST_NAME]: values[CUSTOMER_FIELDS.LAST_NAME],
          [CUSTOMER_FIELDS.PHONE_NUMBER]: values[CUSTOMER_FIELDS.PHONE_NUMBER],
          [CUSTOMER_FIELDS.EMAIL]: values[CUSTOMER_FIELDS.EMAIL],
        };

        setTempCustomer(newTempValues);
      }

      setValues({
        ...values,
        ...initialState,
      });
    } else {
      setValues({
        ...values,
        [CUSTOMER_FIELDS.FIRST_NAME]: tempCustomer[CUSTOMER_FIELDS.FIRST_NAME],
        [CUSTOMER_FIELDS.LAST_NAME]: tempCustomer[CUSTOMER_FIELDS.LAST_NAME],
        [CUSTOMER_FIELDS.PHONE_NUMBER]: tempCustomer[CUSTOMER_FIELDS.PHONE_NUMBER],
        [CUSTOMER_FIELDS.EMAIL]: tempCustomer[CUSTOMER_FIELDS.EMAIL],
      });
    }
  }, [values[CUSTOMER_FIELDS.I_AM_CUSTOMER]]);

  return (
    <Container>
      {showIAmCustomer && (
        <Row>
          <Col>
            <FieldCheckbox name={CUSTOMER_FIELDS.I_AM_CUSTOMER} text="Я получатель *" />
          </Col>
        </Row>
      )}
      <Row indent={12}>
        <OrderColumn>
          <Field name={CUSTOMER_FIELDS.FIRST_NAME} placeholder="Имя" disabled={disabledFields} validation />
        </OrderColumn>
        <OrderColumn>
          <Field name={CUSTOMER_FIELDS.LAST_NAME} placeholder="Фамилия" disabled={disabledFields} validation />
        </OrderColumn>
        <OrderColumn>
          <FieldMobile
            name={CUSTOMER_FIELDS.PHONE_NUMBER}
            placeholder="Номер телефона"
            disabled={disabledFields}
            validation
          />
        </OrderColumn>
        <OrderColumn>
          <Field name={CUSTOMER_FIELDS.EMAIL} placeholder="E-mail" disabled={disabledFields} validation />
        </OrderColumn>
      </Row>
      <Row>
        <Col>
          <Typography variant="mini1" color="tertiary">
            *При оплате покупки на сайте, пожалуйста, укажите ФИО получателя. Если товар будет забирать другой человек
            (не покупатель) — укажите его данные. Заказы выдаются при предъявлении любого документа, удостоверяющего
            личность.
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};
