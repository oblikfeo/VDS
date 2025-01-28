import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React, { MouseEvent } from 'react';

import { ROUTES } from '@common/constants/routes';
import { CustomBackground } from "@layouts/Lampastar/components/CustomBackground";
import { Icon } from '@ui/components';

import {
  NavGroup,
  StyledHeader,
  StyledLinkBottom,
  LinkBottomActive,
  CatalogButton,
  HeaderIcon,
  HeaderIcons,
  HeaderIconCounter,
  HeaderPhone,
  HeaderLogo,
  HeaderContainer,
  HeaderWrapper,
  HeaderMenuWrapper,
  HeaderMenuContent,
  HeaderMenu,
  HeaderMenuLine,
  HeaderMenuPoint,
} from './styled';
import { CONTACTS, MAIN_MENU } from '../../../../common/constants';
import { useBasket, useProfile } from '../../../../common/hooks';
import { CatalogSearch } from '../../../../modules/Search';
import { Logo } from '../../../../resources/images';
import { User, Basket, Close, MenuIcon } from '../../../../ui/icons';


const { basket, home, profile } = ROUTES;
const { phoneNumber } = CONTACTS;

type Props = {
  menuIsOpened: boolean;
  toggleMenu: () => void;
};

type RoutesType = {
  path: string;
  label: string;
  active?: boolean;
}

export const Header = React.memo(({ menuIsOpened, toggleMenu }: Props) => {
  const { isAuthorized } = useProfile();
  const { productsCount } = useBasket();

  const onClickHeader = (): void => {
    if (menuIsOpened) toggleMenu();
  };

  const onClickMenu = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    toggleMenu();
  };

  const pathname: string = usePathname()

  const routesMenu: RoutesType[] = []

  MAIN_MENU.forEach((item: string) => {
    routesMenu.push({
      path: ROUTES[item].path,
      label: ROUTES[item].label,
      active: pathname === ROUTES[item].path,
    })
  })

  return (
    <StyledHeader menuIsOpened={menuIsOpened} >
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderLogo href={home.path}>
            <Image src={Logo} alt="LAMPASTAR" />
          </HeaderLogo>
          <HeaderMenuWrapper>
            <HeaderMenuContent>
              <NavGroup>
                {routesMenu.length > 0 && routesMenu.map((route: RoutesType) => (
                  <StyledLinkBottom key={route.path} href={route.path}>
                    {route.active === true
                      ? <><LinkBottomActive>{route.label}</LinkBottomActive><HeaderMenuPoint /></>
                      : route.label
                    }
                  </StyledLinkBottom>
                ))}
              </NavGroup>
              <HeaderPhone href={`tel:${phoneNumber.value}`}>
                {phoneNumber.label}
              </HeaderPhone>
            </HeaderMenuContent>
            <HeaderMenu>
              <HeaderMenuLine />
            </HeaderMenu>
          </HeaderMenuWrapper>
        </HeaderWrapper>
        <HeaderWrapper>
          <CatalogButton >
            {menuIsOpened ? <Icon icon={Close} /> : <Icon icon={MenuIcon} />}
          </CatalogButton>
          <CatalogSearch />
          <HeaderIcons>
            <Link href={isAuthorized ? profile.path : '/profile/login'}>
              <HeaderIcon>
                <User />
              </HeaderIcon>
            </Link>
            <Link href={basket.path}>
              <HeaderIcon>
                {!!productsCount && <HeaderIconCounter count={productsCount} />}
                <Basket />
              </HeaderIcon>
            </Link>
          </HeaderIcons>
        </HeaderWrapper>
        <CustomBackground main={menuIsOpened ? true : pathname === '/'} />
      </HeaderContainer>
    </StyledHeader>
  );
});

Header.displayName = 'Header';