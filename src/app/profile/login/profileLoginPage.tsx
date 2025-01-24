'use client';

import React from 'react';

import { useAuthAccess } from '@common/hooks';
import { PageTitle } from '@layouts/Lampastar';
import { Login } from '@modules/Profile';
import { Container, Row, Col } from '@ui/components';

export const ProfileLoginPage = () => {
  useAuthAccess(false);

  return (
    <>
      <PageTitle>Вход в личный кабинет</PageTitle>
      <Container>
        <Row>
          <Col tablet={6}>
            <Login />
          </Col>
        </Row>
      </Container>
    </>
  );
};
