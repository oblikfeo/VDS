import React from 'react';

import { Info } from '../../../ui/components';
import { InformationType } from '../types';

type Props = {
  type: InformationType;
};

const MESSAGES = {
  top: [
    {
      id: 'enablingCatalog',
      message: (
        <>
          <div>Каталог работает в ознакомительном режиме, Вы можете ознакомиться с ассортиментом и ценами.</div>
          <div>Заказ через сайт в данный момент недоступен, обратитесь в офис или по телефону к менеджеру.</div>
        </>
      ),
    },
  ],
};

export const Information = ({ type }: Props) => <Info>{MESSAGES[type][0].message}</Info>;
