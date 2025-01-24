import React from 'react';
import styled from 'styled-components';

import { Field, FieldCheckbox } from '../../../common/components/Field';
import { FieldTextarea } from '../../../common/components/Field/Field';
import { Button } from '../../../ui/components';
import { adaptive } from '../../../ui/components/Adaptive';
import { MESSAGE_FIELDS } from '../constants';

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const Row = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.indents.xxs};
`;

export const NameContainer = styled.div`
  width: 100%;
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.indents.xxl};

  ${adaptive.maxWidth.mobile} {
    display: block;
  }
`;

export const CheckBoxContainer = styled.div`
  max-width: 360px;
  margin-right: ${({ theme }) => theme.indents.xxl};
`;

export const StyledButton = styled(Button.Contained).attrs({ type: 'submit' })`
  ${adaptive.maxWidth.mobile} {
    margin-top: ${({ theme }) => theme.indents.s};
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  flex-grow: 1;
`;

export const ContactForm = () => (
  <ContactFormContainer>
    <Row>
      <NameContainer>
        <Field name={MESSAGE_FIELDS.NAME} placeholder="Ваше имя" validation />
      </NameContainer>
      <Field name={MESSAGE_FIELDS.EMAIL} placeholder="E-mail для ответа" validation />
    </Row>
    <TextAreaContainer>
      <FieldTextarea name={MESSAGE_FIELDS.MESSAGE} placeholder="Ваше сообщение" validation />
    </TextAreaContainer>
    <BottomContainer>
      <CheckBoxContainer>
        <FieldCheckbox
          name={MESSAGE_FIELDS.AGREE}
          text="Подтверждаю, что я ознакомлен и согласен с условиями политики конфиденциальности"
          validation
        />
      </CheckBoxContainer>
      <StyledButton>Отправить сообщение</StyledButton>
    </BottomContainer>
  </ContactFormContainer>
);
