import React from 'react';

import {
  Wrapper,
  ShortBlack,
  LongBlack,
  SmallBlack,
  White,
} from './styled';

type Props = {
  main?: boolean;
};

export const CustomBackground = React.memo(({ main }: Props) => (
  <Wrapper>
    <ShortBlack/>
    <LongBlack main={main ?? false} />
    <SmallBlack/>
    <White/>
  </Wrapper>
));

CustomBackground.displayName = 'HeaderBackground';