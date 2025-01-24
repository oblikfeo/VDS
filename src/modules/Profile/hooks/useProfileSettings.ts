import { useMutation, useQuery } from '@tanstack/react-query';

import { useToasts } from '../../../common/hooks';
import { CustomerType, ToastStatusEnum } from '../../../common/types';
import { getQueryRequest } from '../../../common/utils';
import { API_EDIT_PROFILE_SETTINGS_URL, API_GET_PROFILE_SETTINGS_URL } from '../constants';
import { SettingsFormValuesType } from '../types';

const editOptions = {
  url: API_EDIT_PROFILE_SETTINGS_URL,
  method: 'POST',
};

export const useProfileSettings = () => {
  const { addToast } = useToasts();
  const { data, isLoading: isLoadingData } = useQuery([API_GET_PROFILE_SETTINGS_URL], getQueryRequest<CustomerType>());

  const { mutateAsync } = useMutation(getQueryRequest<any, SettingsFormValuesType>(editOptions));

  const handleEdit = (values: SettingsFormValuesType) => {
    mutateAsync(values).catch(() => {
      addToast({ message: 'Ошибка при обновлении данных, попробуйте позже', status: ToastStatusEnum.ERROR });
    });
  };

  return { customer: data, isLoading: isLoadingData, handleEdit };
};
