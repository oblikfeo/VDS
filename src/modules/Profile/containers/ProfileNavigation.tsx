'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

import { useProfile } from '../../../common/hooks';
import { List, ListItem, Card } from '../../../ui/components';

const LogoutListItem = styled(ListItem)`
  background: ${({ theme }) => theme.color.buttons.secondary};
  color: ${({ theme }) => theme.color.text.secondary};
`;

export const ProfileNavigation = () => {
  const { isAuthorized, logout } = useProfile();
  const router = useRouter();
  const pathname = usePathname();

  const handleOnClick = (path: string) => {
    router.push(`/profile${path}`);
  };

  return (
    <Card>
      <List>
        {!isAuthorized && (
          <>
            <ListItem onClick={() => handleOnClick('/login')} active={pathname === `/profile/login`}>
              Вход
            </ListItem>
            <ListItem onClick={() => handleOnClick('/register')} active={pathname === `/profile/register`}>
              Регистрация
            </ListItem>
          </>
        )}
        {isAuthorized && (
          <>
            <ListItem onClick={() => handleOnClick('/')} active={pathname === `/profile`}>
              Профиль
            </ListItem>
            <ListItem onClick={() => handleOnClick('/settings')} active={pathname === `/profile/settings`}>
              Настройки профиля
            </ListItem>
            <ListItem onClick={() => handleOnClick('/orders')} active={pathname === `/profile/orders`}>
              Мои заказы
            </ListItem>
            <LogoutListItem onClick={() => logout()}>Выход</LogoutListItem>
          </>
        )}
      </List>
    </Card>
  );
};
