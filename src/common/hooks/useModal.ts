'use client';

import { useDispatch } from 'react-redux';

import { openModalAction, closeModalAction } from '../redux';

export const useModal = () => {
  const dispatch = useDispatch();

  const closeModal = (modalId: string) => {
    dispatch(closeModalAction({ modalId }));
  };

  const openModal = (modalId: string, props?: unknown) => {
    dispatch(openModalAction({ modalId, modalProps: props }));
  };

  return { closeModal, openModal };
};
