import { useContext } from 'react';

import { FeatureTogglesContext } from './context';

export const useFeature = (name: string) => {
  const context = useContext(FeatureTogglesContext);

  return context[name]?.enabled;
};
