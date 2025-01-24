import styled from 'styled-components';

import { MAX_CONTENT_WIDTH, MIN_CONTENT_WIDTH } from '../../constants';

export const CatalogMenuModal = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 165px;
  bottom: 0;
  width: 100%;
  height: max-content;
  z-index: ${({ theme }) => theme.zIndex.menu};
`;

export const CatalogMenuWrapper = styled.div`
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH};
  min-width: ${MIN_CONTENT_WIDTH};
  position: relative;
  z-index: 1;
  padding: 20px;
  margin-top: -20px;
`;

export const CatalogMenuBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.background.secondary};
  clip-path: polygon(0 0, 0 100%, 30px 100%, 30px 0, calc(100% - 30px) 0, calc(100% - 30px) calc(100% - 20px), 0 calc(100% - 20px), 20px 100%, 100% 100%, 101% 0);
`;
