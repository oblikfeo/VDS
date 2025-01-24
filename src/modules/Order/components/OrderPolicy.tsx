import React from 'react';
import styled from 'styled-components';

import { Typography } from '../../../ui/components';

const Container = styled.div`
  margin-top: ${({ theme }) => theme.indents.l};
`;
export const OrderPolicy = () => (
  <Container>
    <Typography tag="div" variant="mini1" color="tertiary">
      Завершая оформление заказа, я даю своё согласие на обработку персональных данных и подтверждаю ознакомление со
      сроками хранения товара в соответствии с указанными здесь условиями. В соответствии с ФЗ №54-ФЗ кассовый чек при
      онлайн-оплате на сайте будет предоставлен в электронном виде на указанную при оформлении электронную почту.
    </Typography>
  </Container>
);
