'use client';

import { Form, Formik } from 'formik';
import React from 'react';

import { Button } from '../../../ui/components';
import { SettingsForm } from '../components';
import { SETTINGS_FIELDS } from '../constants';
import { useProfileSettings } from '../hooks';
import { SettingsFormValuesType } from '../types';
import { settingsValidationSchema } from '../utils';

export const ProfileSettings = () => {
  const { customer, isLoading, handleEdit } = useProfileSettings();

  const settingsInitialValues = {
    [SETTINGS_FIELDS.FIRST_NAME]: customer?.firstName || '',
    [SETTINGS_FIELDS.LAST_NAME]: customer?.lastName || '',
    [SETTINGS_FIELDS.EMAIL]: customer?.email || '',
    [SETTINGS_FIELDS.PHONE]: customer?.phone || '',
    [SETTINGS_FIELDS.NEW_PASSWORD]: '',
    [SETTINGS_FIELDS.NEW_PASSWORD_CONFIRM]: '',
    [SETTINGS_FIELDS.SUBSCRIBE_NEWS]: false,
  };

  const handleSubmit = (values: SettingsFormValuesType) => {
    handleEdit(values);
  };

  if (isLoading) return <>LOADING...</>;

  return (
    <Formik initialValues={settingsInitialValues} validationSchema={settingsValidationSchema} onSubmit={handleSubmit}>
      <Form>
        <SettingsForm />
        <Button.Contained>Сохранить</Button.Contained>
      </Form>
    </Formik>
  );
};
