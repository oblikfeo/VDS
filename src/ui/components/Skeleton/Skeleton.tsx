import React, { ReactNode } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { TypographyNames } from '../../../layouts/Lampastar/types';

type TextSkeletonType = {
  width?: string | number;
  size?: TypographyNames;
};

const textSizes: Partial<Record<TypographyNames, string>> = {
  title1: '',
  title2: '',
  main1: '34px',
  main2: '',
  mini1: '10px',
  mini2: '12px',
  body1: '14px',
  body2: '15px',
  body3: '16px',
  body4: '',
  body5: '',
};

const animation = keyframes`
  from {
    opacity: 1;
  }
  
  50% {
    opacity: .3;
  }

  to {
    opacity: 1;
  }
`;

const animationStyle = css`
  animation: ${animation} 1.5s linear infinite;
`;

export const BaseSkeleton = styled.div`
  border-radius: ${({ theme }) => theme.radius.xxs};
  background: ${({ theme }) => theme.color.background.skeletonPrimary};
  ${animationStyle}
`;

const BaseSkeletonSecondary = styled.div`
  border-radius: ${({ theme }) => theme.radius.xxs};
  background: ${({ theme }) => theme.color.background.skeletonSecondary};
  ${animationStyle}
`;

const textSceletonStyle = css<TextSkeletonType>`
  border-radius: ${({ theme }) => theme.radius.xxxs};
  height: ${({ size }) => (size && textSizes[size]) || textSizes.body3};
  width: ${({ width }) => {
    if (width) return '100%';

    if (typeof width === 'number') return `${width}px`;

    return width;
  }};
`;

export const TextSkeleton = styled(BaseSkeletonSecondary)<TextSkeletonType>`
  ${textSceletonStyle}
`;

export const TextSkeletonSecondary = styled(BaseSkeleton)<TextSkeletonType>`
  ${textSceletonStyle}
`;

const ListItemSkeletonPadding = styled.div`
  padding: ${({ theme }) => theme.indents.s};
`;

export const ListItemSkeleton = ({ width, active, size }: TextSkeletonType & { active?: boolean }) =>
  active ? (
    <BaseSkeleton>
      <ListItemSkeletonPadding>
        <TextSkeleton width={width} size={size || 'body3'} />
      </ListItemSkeletonPadding>
    </BaseSkeleton>
  ) : (
    <ListItemSkeletonPadding>
      <TextSkeleton width={width} size={size || 'body3'} />
    </ListItemSkeletonPadding>
  );

export const CardSkeleton = styled(({ children, className }: { children?: ReactNode; className?: string }) => (
  <BaseSkeletonSecondary className={className}>{children}</BaseSkeletonSecondary>
))`
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.s};
  padding: ${({ theme }) => theme.indents.m};
`;

export const ImageSkeleton = styled(({ className }: { className?: string }) => <BaseSkeleton className={className} />)`
  height: 100%;
  border-radius: ${({ theme }) => theme.radius.s};
`;

export const ButtonSkeleton = styled(({ children, className }: { children?: ReactNode; className?: string }) => (
  <BaseSkeleton className={className}>{children}</BaseSkeleton>
))`
  height: 40px;
`;
