import React, { ReactNode, useState } from 'react';

import { TabsControl } from './TabsControl';

type TabType = {
  label: string;
  content: ReactNode;
  onActivate?: () => void;
};

type Props = {
  tabs: TabType[];
};

export const Tabs = ({ tabs }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
    tabs[index]?.onActivate?.();
  };

  return (
    <>
      <TabsControl labels={tabs.map(({ label }) => label)} onClick={handleOnClick} activeIndex={activeIndex} />
      {tabs.map(({ content }, index) => (index === activeIndex ? content : null))}
    </>
  );
};
