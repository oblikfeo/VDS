import React from 'react';

import {CatalogMenuBorder, CatalogMenuModal, CatalogMenuWrapper} from './styled';
import { CatalogMenu as CatalogMenuFromModule } from '../../../../modules/Catalog/containers/CatalogMenu';

type Props = {
  closeMenu: () => void;
};

export const CatalogMenu = ({ closeMenu }: Props) => (
  <CatalogMenuModal onClick={closeMenu}>
    <CatalogMenuWrapper onClick={(e) => e.stopPropagation()}>
      <CatalogMenuBorder/>
        <CatalogMenuFromModule closeMenu={closeMenu} />
    </CatalogMenuWrapper>
  </CatalogMenuModal>
);
