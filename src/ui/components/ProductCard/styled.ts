import styled from 'styled-components';

import { CardLink } from '@ui/components/Card/Card';

import { Like } from '../../icons';
import { adaptive } from '../Adaptive';
import { Button } from '../Button';
import { Card } from '../Card';

export const ImageBox = styled.div`
  height: 170px;
  display: flex;
  justify-content: center;

  svg,
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageBoxLine = styled(ImageBox)`
  min-width: 170px;
  max-width: 170px;
`;

export const ImageBoxBasket = styled(ImageBox)`
  height: 96px;
  min-width: 96px;
  max-width: 96px;
`;

export const StyledCard = styled(CardLink)`
  display: flex;
  flex-direction: column;
`;

export const StyledCardLine = styled(Card)`
  display: flex;
`;

export const StyledBasketCardLine = styled(Card)`
  display: flex;
`;

export const TopBlock = styled.div`
  flex-grow: 1;
  cursor: pointer;
`;

export const LeftBlock = styled.div`
  margin-right: ${({ theme }) => theme.indents.m};
  cursor: pointer;
`;

export const RightBlock = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const RightBlockCart = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: 139px;
  min-width: 139px;
  justify-content: space-between;
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const NameContainer = styled.div<{ row?: number }>`
  height: ${({ row = 3 }) => 24 * row}px;
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  -webkit-line-clamp: ${({ row = 3 }) => 24 * row};

  ${({ theme }) => theme.typography.body5}
`;

export const PropertiesContainer = styled.div`
  flex-grow: 1;
`;

export const BasketNameContainer = styled.div`
  word-break: break-word;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  /* Ограничиваем блок текста тремя строками */
  -webkit-line-clamp: 2;

  ${({ theme }) => theme.typography.body5}
  height: 48px;

  ${adaptive.maxWidth.mobile} {
    margin-bottom: ${({ theme }) => theme.indents.xxs};
  }
  ${adaptive.maxWidth.tablet} {
    -webkit-line-clamp: 3;
    ${({ theme }) => theme.typography.body1}
    height: 60px;
  }
`;

export const BasketControlBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const InfoBlock = styled.div`
  flex-grow: 1;
  margin-right: ${({ theme }) => theme.indents.m};
  cursor: pointer;
`;

export const PriceContainer = styled.div`
  margin-top: ${({ theme }) => theme.indents.m};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PriceBasketContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const ActualPrice = styled.div`
  ${({ theme }) => theme.typography.main1};
  margin-left: 10px;
  white-space: nowrap;
`;

export const OldPrice = styled.div`
  white-space: nowrap;
  ${({ theme }) => theme.typography.main2};
  color: ${({ theme }) => theme.color.text.light};
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: -3px;
    right: -3px;
    top: calc(50% - 1px);
    height: 2px;
    background: ${({ theme }) => theme.color.text.light};
    transform: rotate(175deg);
  }
`;

export const BasketPriceTotal = styled.div`
  ${({ theme }) => theme.typography.body1};
  white-space: nowrap;
`;

export const BasketPrice = styled.div`
  color: ${({ theme }) => theme.color.text.tertiary};
  ${({ theme }) => theme.typography.mini1};
  white-space: nowrap;
`;

export const ActionsBlock = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.indents.m};
`;

export const BasketTopBlock = styled.div`
  display: flex;
  flex-grow: 1;

  ${adaptive.maxWidth.mobile} {
    flex-direction: column-reverse;
  }
`;

export const BasketBottomBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  ${adaptive.maxWidth.mobile} {
    flex-direction: column;
    align-items: flex-end;
    margin-top: ${({ theme }) => theme.indents.s};
  }
`;

export const WarningContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({ theme }) => theme.indents.s};
  ${({ theme }) => theme.typography.mini1};
  background: ${({ theme }) => theme.color.statusBackground.warning};
  padding: 0 ${({ theme }) => theme.indents.s};
  flex-grow: 1;
  ${adaptive.maxWidth.mobile} {
    margin-right: 0;
  }
`;

export const BasketCounterBlock = styled.div`
  margin-left: ${({ theme }) => theme.indents.m};
  max-width: 146px;

  ${adaptive.maxWidth.mobile} {
    margin-top: ${({ theme }) => theme.indents.xs};
    margin-left: unset;
  }
`;

export const AdditionalButton = styled(Button.Text)<{ active: boolean }>`
  color: ${({ theme, active }) => (active ? theme.color.buttons.secondaryActive : theme.color.text.lightTwo)};
  padding-left: 0;
  padding-right: 0;
  margin-left: ${({ theme }) => theme.indents.m};

  :hover {
    color: ${({ theme }) => theme.color.buttons.secondaryHover};
  }

  svg {
    width: ${({ theme }) => theme.sizes.xxxl};
    height: ${({ theme }) => theme.sizes.xxxl};
  }
`;

export const AdditionalBasketButton = styled(Button.Text)<{ active?: boolean; del?: boolean }>`
  color: ${({ theme, active, del }) => {
    if (del) return theme.color.buttons.text;
    if (active) return theme.color.buttons.secondaryActive;

    return theme.color.text.lightTwo;
  }};
  padding-left: 0;
  padding-right: 0;
  margin-left: ${({ theme }) => theme.indents.s};
  align-items: flex-start;

  :hover {
    color: ${({ theme }) => theme.color.buttons.secondaryHover};
  }

  svg {
    width: ${({ theme }) => theme.sizes.xxl};
    height: ${({ theme }) => theme.sizes.xxl};
  }
`;

export const LikeActive = styled(Like)`
  fill: currentColor;
`;
