import { useMutation } from '@tanstack/react-query';

import { useToasts } from '../../../common/hooks';
import { ToastStatusEnum } from '../../../common/types';
import { getQueryRequest } from '../../../common/utils';
import { API_SEND_CALL_ME_URL, API_SEND_MESSAGE_URL } from '../constants';
import { CallMeRequestType, CallMeResponseType, MessageRequestType, MessageResponseType } from '../types';

const messageOptions = {
  method: 'POST',
  url: API_SEND_MESSAGE_URL,
};

const callMeOptions = {
  method: 'POST',
  url: API_SEND_CALL_ME_URL,
};

export const useContacts = () => {
  const { addToast } = useToasts();
  const { mutateAsync: sendMessage } = useMutation(
    getQueryRequest<MessageResponseType, MessageRequestType>(messageOptions),
  );

  const { mutateAsync: sendCallMe } = useMutation(
    getQueryRequest<CallMeResponseType, CallMeRequestType>(callMeOptions),
  );

  const sendMessageHandler = (values: MessageRequestType) =>
    sendMessage(values)
      .then((data) => {
        addToast({ message: 'Сообщение отправлено', status: ToastStatusEnum.SUCCESS });
        return data;
      })
      .catch(() =>
        addToast({ message: 'Не удалось отправить сообщение, попробуйте позже', status: ToastStatusEnum.ERROR }),
      );

  const sendCallMeHandler = (values: CallMeRequestType) =>
    sendCallMe(values)
      .then((data) => {
        addToast({
          message: 'Сообщение отправлено, в ближайшее время Вам перезвонят',
          status: ToastStatusEnum.SUCCESS,
        });
        return data;
      })
      .catch(() =>
        addToast({ message: 'Не удалось отправить сообщение, попробуйте позже', status: ToastStatusEnum.ERROR }),
      );

  return { sendMessage: sendMessageHandler, sendCallMe: sendCallMeHandler };
};
