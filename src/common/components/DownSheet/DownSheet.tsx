import React, { Fragment, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { ModalBackground, DownSheet as DownSheetComponent } from '../../../ui/components';
import { DOWN_SHEET_PORTAL_ID } from '../../constants';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode;
};

export const DownSheet = ({ isOpen, onClose, children, title }: Props) => {
  const portal = typeof document !== 'undefined' ? document?.getElementById(DOWN_SHEET_PORTAL_ID) : null;

  if (!isOpen || !portal) return null;

  const TitleComponent = title ? DownSheetComponent.DownSheetTitle : Fragment;

  const getDownSheetBody = () => (
    <ModalBackground onClick={onClose} isBottomContent fullWidth>
      <DownSheetComponent>
        <TitleComponent>{title}</TitleComponent>
        {children}
      </DownSheetComponent>
    </ModalBackground>
  );

  return createPortal(getDownSheetBody(), portal);
};
