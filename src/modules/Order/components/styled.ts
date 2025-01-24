import styled from 'styled-components';

import { getSidebarMargin, MIN_SIDEBAR_WIDTH } from '../../../layouts/Lampastar';
import { adaptive } from '../../../ui/components';

export const OrderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;

  ${adaptive.maxWidth.tablet} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const OrderProductListContainer = styled.div`
  flex-grow: 1;
`;

export const OrderSidebarContainer = styled.div`
  margin-left: ${getSidebarMargin};
  min-width: ${MIN_SIDEBAR_WIDTH};
  width: ${MIN_SIDEBAR_WIDTH};

  ${adaptive.maxWidth.tablet} {
    margin-left: unset;
    width: 100%;
  }
`;
