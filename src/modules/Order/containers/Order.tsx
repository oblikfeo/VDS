'use client';

import { FormikProps } from 'formik';
import React, { Ref, useRef, useState } from 'react';

import { OrderInputStage } from '../components/OrderInputStage';
import { OrderStatusStage } from '../components/OrderStatusStage';
import { useOrder } from '../hooks';
import { OrderFormValuesType } from '../types';

export const Order = () => {
  const [statusStage, setStatusStage] = useState(0);

  const { isLoadingData, isProgressConfirm, productList, basket, customer, handleConfirm, orderData } = useOrder(() =>
    setStatusStage(1),
  );

  const formRef = useRef<HTMLFormElement>() as unknown as Ref<FormikProps<OrderFormValuesType>> | undefined;

  if (isLoadingData) return <>LOADING...</>;

  const resetStage = () => setStatusStage(0);

  if (statusStage === 0)
    return (
      <OrderInputStage
        customer={customer}
        isProgressConfirm={isProgressConfirm}
        formRef={formRef}
        onConfirm={handleConfirm}
        basketTotal={basket?.total}
        products={productList}
      />
    );

  return <OrderStatusStage resetStage={resetStage} orderData={orderData} showLCInfo={!!customer?.id} />;
};
