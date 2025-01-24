import styled from 'styled-components';

import { MAX_CONTENT_WIDTH, MIN_CONTENT_WIDTH } from '../../constants';

export const ContentWrapper = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};
  min-width: ${MIN_CONTENT_WIDTH};
  margin: 0 auto;
  height: 100%;
  position: relative;
`;
