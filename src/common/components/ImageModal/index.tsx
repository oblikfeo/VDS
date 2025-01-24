import React from 'react';

import { FullImageSlider, ModalBackground } from '../../../ui/components';
import { ImageWithSizeType } from '../../types';
import { ModalCreate, ModalFuncPropsType } from '../ModalCreate';

type Props = {
  modalId: string;
  images: ImageWithSizeType[];
};

export const ImageModal = ({ modalId, images }: Props) => (
  <ModalCreate modalId={modalId}>
    {({
      modalProps: { currentImageId },
      onClose,
    }: // eslint-disable-next-line react/no-unused-prop-types
    ModalFuncPropsType & { modalProps: { currentImageId?: number } }) => (
      <ModalBackground onClick={onClose}>
        <FullImageSlider images={images} currentImageId={currentImageId} onClose={onClose} />
      </ModalBackground>
    )}
  </ModalCreate>
);
