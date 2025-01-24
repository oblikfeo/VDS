import React, { ReactNode } from 'react';

import { Col } from '../../../ui/components';

export const OrderColumn = ({ children }: { children: ReactNode }) => (
  <Col tablet={6} desktopS={4} desktopL={3}>
    {children}
  </Col>
);
