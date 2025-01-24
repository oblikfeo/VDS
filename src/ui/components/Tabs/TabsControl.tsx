import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

type Props = {
  labels: string[];
  onClick: (index: number) => void;
  activeIndex: number;
};

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.color.background.primary};
  border-radius: ${({ theme }) => theme.radius.m};
  display: flex;
  padding: ${({ theme }) => theme.indents.xxs};
`;

const Item = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: ${({ theme }) => theme.indents.xxs} ${({ theme }) => theme.indents.xs};
  cursor: pointer;
  z-index: 2;
`;

const ActiveBackground = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.background.tertiary};
  border-radius: ${({ theme }) => theme.radius.m};
  top: ${({ theme }) => theme.indents.xxs};
  bottom: ${({ theme }) => theme.indents.xxs};
  z-index: 1;
  transition: all 0.3s ease;
`;

export const TabsControl = ({ labels, onClick, activeIndex }: Props) => {
  const bgRef = useRef<HTMLDivElement | null>();
  const activeLabelRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (bgRef.current && activeLabelRef.current) {
      bgRef.current.style.left = `${activeLabelRef.current?.offsetLeft}px`;
      bgRef.current.style.width = `${activeLabelRef.current?.offsetWidth}px`;
    }
  }, [activeIndex]);

  return (
    <Wrapper>
      {labels.map((label, index) => (
        <Item
          key={label}
          onClick={() => onClick(index)}
          {...(index === activeIndex
            ? {
                ref: (instance) => {
                  activeLabelRef.current = instance;
                },
              }
            : {})}
        >
          {label}
        </Item>
      ))}
      <ActiveBackground
        ref={(instance) => {
          bgRef.current = instance;
        }}
      />
    </Wrapper>
  );
};
