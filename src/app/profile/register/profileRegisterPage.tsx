'use client';

import React from 'react';

import { useAuthAccess } from '@common/hooks';
import { PageTitle } from '@layouts/Lampastar';
import { Register } from '@modules/Profile';
import { Col, Container, Row } from '@ui/components';

export const ProfileRegisterPage = () => {
  useAuthAccess(false);

  return (
    <>
      <PageTitle>Регистрация нового аккаунта</PageTitle>
      <Container>
        <Row>
          <Col tablet={12}>
            <Register />
          </Col>
        </Row>
      </Container>
    </>
  );
};
