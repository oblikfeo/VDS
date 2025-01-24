import React, { ReactNode } from 'react';

import { InfoCard } from './styled';

type Props = {
  children: ReactNode;
};

export const Info = ({ children }: Props) => <InfoCard info>{children}</InfoCard>;
