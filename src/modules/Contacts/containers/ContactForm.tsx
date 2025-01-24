import { Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import React from 'react';
import styled from 'styled-components';

import { ContactForm as ContactFormComponent } from '../components';
import { MESSAGE_FIELDS } from '../constants';
import { useContacts } from '../hooks';
import { MessageFormValuesType } from '../types';
import { messageValidationSchema } from '../utils';

const initialValues = {
  [MESSAGE_FIELDS.EMAIL]: '',
  [MESSAGE_FIELDS.NAME]: '',
  [MESSAGE_FIELDS.MESSAGE]: '',
  [MESSAGE_FIELDS.AGREE]: false,
};

const StyledForm = styled(Form)`
  flex-grow: 1;
  display: flex;
`;

export const ContactForm = () => {
  const { sendMessage } = useContacts();

  const handleSubmit = (values: MessageFormValuesType, { resetForm }: FormikHelpers<MessageFormValuesType>) => {
    const { [MESSAGE_FIELDS.AGREE]: agree, ...requestData } = values;

    sendMessage(requestData).then((data) => data?.success && resetForm());
  };

  return (
    <Formik initialValues={initialValues} validationSchema={messageValidationSchema} onSubmit={handleSubmit}>
      <StyledForm>
        <ContactFormComponent />
      </StyledForm>
    </Formik>
  );
};
