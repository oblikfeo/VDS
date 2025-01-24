import { Form, Formik, FormikProps } from 'formik';
import React, { Ref, useMemo } from 'react';
import styled from 'styled-components';

import { CustomerType } from '../../../common/types';
import { adaptive, Typography } from '../../../ui/components';
import { CustomerForm, PaymentForm, ShippingForm, OrderPolicy } from '../components';
import { CUSTOMER_FIELDS } from '../constants';
import { OrderFormValuesType } from '../types';
import { orderValidationSchema } from '../utils';

type Props = {
  customer?: CustomerType;
  formRef: Ref<FormikProps<OrderFormValuesType>> | undefined;
  onConfirm: (data: OrderFormValuesType) => void;
};

const FormContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.indents.xxxl};
`;

const StyledOrderPolicyContainer = styled.div`
  ${adaptive.maxWidth.tablet} {
    display: none;
  }
`;

export const OrderFormContainer = ({ customer, formRef, onConfirm }: Props) => {
  const { firstName, lastName, email, phone } = customer ?? {};

  const initialFormValues = useMemo<OrderFormValuesType>(
    () => ({
      [CUSTOMER_FIELDS.I_AM_CUSTOMER]: true,
      [CUSTOMER_FIELDS.FIRST_NAME]: firstName ?? '',
      [CUSTOMER_FIELDS.LAST_NAME]: lastName ?? '',
      [CUSTOMER_FIELDS.PHONE_NUMBER]: phone ?? '',
      [CUSTOMER_FIELDS.EMAIL]: email ?? '',
      [CUSTOMER_FIELDS.SHIPPING_METHOD]: '1',
      [CUSTOMER_FIELDS.PAYMENT_METHOD]: '1',
    }),
    [email, firstName, lastName, phone],
  );

  const customerInitialState = useMemo(
    () => ({
      [CUSTOMER_FIELDS.FIRST_NAME]: firstName ?? '',
      [CUSTOMER_FIELDS.LAST_NAME]: lastName ?? '',
      [CUSTOMER_FIELDS.PHONE_NUMBER]: phone ?? '',
      [CUSTOMER_FIELDS.EMAIL]: email ?? '',
    }),
    [firstName, lastName, email, phone],
  );

  const handleSubmit = (values: OrderFormValuesType) => {
    onConfirm(values);
  };

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialFormValues}
      validationSchema={orderValidationSchema}
      onSubmit={handleSubmit}
    >
      {/* eslint-disable-next-line no-param-reassign */}
      <Form>
        <FormContainer>
          <Typography tag="h2" variant="main1">
            1. Данные покупателя
          </Typography>
          <CustomerForm initialState={customerInitialState} showIAmCustomer={!!customer?.id} />
        </FormContainer>
        <FormContainer>
          <Typography tag="h2" variant="main1">
            2. Выберите способ получения
          </Typography>
          <ShippingForm />
        </FormContainer>
        <FormContainer>
          <Typography tag="h2" variant="main1">
            3. Выберите способ оплаты
          </Typography>
          <PaymentForm />
        </FormContainer>
        <StyledOrderPolicyContainer>
          <OrderPolicy />
        </StyledOrderPolicyContainer>
      </Form>
    </Formik>
  );
};
