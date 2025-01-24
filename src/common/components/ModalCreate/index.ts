import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { MODAL_PORTAL_ID } from '../../constants';
import { closeModalAction, StateType } from '../../redux';

export type ModalFuncPropsType = { modalProps: any; onClose: () => void };

type Props = {
  modalId: string;
  children: (props: ModalFuncPropsType) => ReactNode;
};

export const ModalCreate = ({ modalId, children }: Props) => {
  const dispatch = useDispatch();

  const { modalProps, openedModalIds } = useSelector(({ app }: StateType) => ({
    openedModalIds: app.openedModalIds,
    modalProps: app.modalProps,
  }));

  const portal = typeof document !== 'undefined' ? document?.getElementById(MODAL_PORTAL_ID) : null;

  const handleClose = () => {
    dispatch(closeModalAction({ modalId }));
  };

  if (!openedModalIds.includes(modalId) || !portal) {
    return null;
  }

  return createPortal(children({ modalProps: modalProps[modalId] ?? {}, onClose: handleClose }), portal);
};
