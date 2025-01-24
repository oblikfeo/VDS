'use client';

import React from 'react';

import { useAuthAccess } from '@common/hooks/useAuthAccess';
import { PageTitle } from '@layouts/Lampastar';
import { Forgot } from '@modules/Profile';
import { Container, Row, Col } from '@ui/components';

export const ProfileForgotPage = () => {
  useAuthAccess(false);

  return (
    <>
      <PageTitle>Вход в личный кабинет</PageTitle>
      <Container>
        <Row>
          <Col tablet={6}>
            <Forgot />
          </Col>
        </Row>
      </Container>
    </>
  );
};
