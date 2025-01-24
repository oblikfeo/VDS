import { useFormikContext } from 'formik';
import React from 'react';

import { OrderColumn } from './OrderColumn';
import { OrderOption } from './OrderOption';
import { Container, Row, Typography } from '../../../ui/components';
import { CUSTOMER_FIELDS } from '../constants';
import { OrderFormValuesType } from '../types';

export const PaymentForm = () => {
  const { values } = useFormikContext<OrderFormValuesType>();

  const paymentMethods = [
    {
      id: 1,
      icon: '',
      name: 'При получении',
      description: 'оплата наличными или картой',
    },
  ];

  return (
    <Container>
      <Row indent={12}>
        {paymentMethods.map(({ id, name, description }) => (
          <OrderColumn key={id}>
            <OrderOption
              active={values[CUSTOMER_FIELDS.PAYMENT_METHOD] === id.toString()}
              name={CUSTOMER_FIELDS.PAYMENT_METHOD}
              value={id.toString()}
            >
              <Typography>{name}</Typography>
              <Typography tag="div" variant="mini1" color="copyright">
                {description}
              </Typography>
            </OrderOption>
          </OrderColumn>
        ))}
      </Row>
    </Container>
  );
};
