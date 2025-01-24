'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { useProfile } from '../../../common/hooks';
import { Button } from '../../../ui/components';
import { Verification as VerificationComponent } from '../components';

export const Verification = () => {
  const router = useRouter();

  const { isAuthorized, isSuccessRegister, isErrorRegister, registerError, resetRegister } = useProfile();

  useEffect(() => {
    if (isAuthorized) {
      router.push('/profile');
    }
  }, [isAuthorized, router]);

  if (isAuthorized) return null;

  if (isErrorRegister) {
    return (
      <>
        <div>
          {
            // @ts-ignore
            registerError?.error
          }
        </div>
        <div>
          <Button.Contained onClick={resetRegister}>OK</Button.Contained>
        </div>
      </>
    );
  }

  if (isSuccessRegister)
    return <>Вы успешно зарегистрировали. На указанную почту было направлено письмо для подтверждения регистрации.</>;

  return <VerificationComponent />;
};
