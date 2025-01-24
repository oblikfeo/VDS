import Link from 'next/link';
import styled, { css } from 'styled-components';

import { ButtonContained } from '../../../../ui/components';
import { adaptive } from '../../../../ui/components/Adaptive';
import { MAX_CONTENT_WIDTH, MIN_CONTENT_WIDTH } from '../../constants';

const getLinkStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`;

export const StyledHeader = styled.header<{ menuIsOpened: boolean }>`
  display: flex;
  justify-content: center;
  ${adaptive.maxWidth.tablet} {
    display: ${({ menuIsOpened }) => (menuIsOpened ? 'none' : 'block')};
  }
  padding-top: 20px;
`;

export const HeaderContainer = styled.div`
  max-width: ${MAX_CONTENT_WIDTH};
  min-width: ${MIN_CONTENT_WIDTH};
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding: 10px 20px 20px;
  position: relative;
  z-index: 1;
`;

export const NavGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding-left: 20px;
  height: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const HeaderMenuWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const HeaderMenuContent = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
`;

export const HeaderMenu = styled.div`
  width: 100%;
  height: 11px;
  display: flex;
  align-items: center;
`;

export const HeaderMenuLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.text.link};
`;

export const HeaderMenuPoint = styled.div`
  width: 11px;
  height: 11px;
  background: #FFFFFF;
  border-radius: 100%;
  box-shadow: 0px 0px 10px 0px rgb(255, 197, 61),0px 0px 8px 0px rgba(255, 255, 255, 0.55);
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
`;

export const HeaderPhone = styled(Link)`
  color: ${({ theme }) => theme.color.text.link};
  margin-left: auto;
  ${({ theme }) => theme.typography.link};
`;

export const HeaderLogo = styled(Link)`
  width: 118px;
  height: 56px;
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  margin: -10px 0 0 -20px;
`;

const StyledLink = styled(Link)`
  ${getLinkStyle};
`;

export const StyledLinkBottom = styled(StyledLink)`
  white-space: nowrap;
  color: #FFFFFF;
  font-size: 16px;
  line-height: 24px;
  position: relative;
`;

export const LinkBottomActive = styled.span`
  font-weight: 700;
`;

export const CatalogButton = styled(ButtonContained)`
  padding: 0 37px;
  margin: 0;
  border-radius: 4px;
`;

export const HeaderIcons = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-left: auto;
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.color.buttons.primary};
  border-radius: 4px;
`;

export const HeaderIconCounter = styled.div<{ count?: number }>`
  position: absolute;
  background: ${({ theme }) => theme.color.background.primary};
  top: -5px;
  left: 50%;
  height: 18px;
  padding: 2px;
  border-radius: 9px;

  :after {
    ${({ theme }) => theme.typography.mini0};
    content: '${({ count }) => count}';
    color: ${({ theme }) => theme.color.text.secondary};
    background: ${({ theme }) => theme.color.background.contrastLine};
    display: flex;
    justify-content: center;
    padding: 0 2px;
    height: 14px;
    min-width: 14px;
    border-radius: 7px;
  }
`;
