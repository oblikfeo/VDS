import React, { CSSProperties, ReactNode, useState } from 'react';

import { ContentContainer, Header, InnerContainer, Title, TitleIcon } from './styled';
import { ArrowTop, ArrowBottom } from '../../icons';
import { Icon } from '../Icon';

type Props = {
  title?: string;
  children: ReactNode;
  isOpen?: boolean;
  style?: CSSProperties;
};

export const Accordion = ({ title, children, isOpen, style }: Props) => {
  const [opened, setOpened] = useState(!!isOpen);

  const ArrowComponent = opened ? ArrowTop : ArrowBottom;

  const onCLickToggleHandler = () => {
    setOpened(!opened);
  };

  return (
    <div style={style}>
      <Header onClick={onCLickToggleHandler}>
        <Title>{title}</Title>
        <TitleIcon>
          <Icon icon={ArrowComponent} size="l" />
        </TitleIcon>
      </Header>
      <ContentContainer opened={opened}>
        <InnerContainer>{children}</InnerContainer>
      </ContentContainer>
    </div>
  );
};
