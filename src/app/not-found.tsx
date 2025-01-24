'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import { NotFound as NotFoundSVG } from '@resources/images';
import { ButtonContained, Typography } from '@ui/components';

import { ErrorCode, ErrorDescription, ErrorText, ErrorWrapper, ImageBox, InfoBlock } from './styled';

export default function NotFoundPage() {
  const router = useRouter();
  const onClick = () => {
    router.replace('/');
  };

  return (
    <ErrorWrapper>
      <InfoBlock>
        <ErrorCode>404</ErrorCode>
        <ErrorText>Ошибка</ErrorText>
      </InfoBlock>
      <ErrorDescription>
        <Typography variant="body5">
          Так уж получилось, что из множества страниц нашего сайта Вы оказались как раз на той, которая не существует…
        </Typography>
      </ErrorDescription>
      <ImageBox>
        <Image src={NotFoundSVG} alt="404 | Страница не найдена" />
      </ImageBox>
      <ButtonContained onClick={onClick}>Перейти на главную</ButtonContained>
    </ErrorWrapper>
  );
}
