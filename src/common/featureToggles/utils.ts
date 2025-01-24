import { featureToggleState } from './featureToggleState';
import { FeatureTogglesLocalStorageType } from './types';
import { isClient } from '../utils';

const FEATURE_TOGGLES_KEY = 'FEATURE_TOGGLES';

export const getToggles = () => {
  const toggles: FeatureTogglesLocalStorageType = isClient()
    ? JSON.parse(localStorage.getItem(FEATURE_TOGGLES_KEY) || '{}')
    : {};

  return Object.keys(featureToggleState).reduce(
    (acc, currentName) => ({
      ...acc,
      [currentName]: {
        ...featureToggleState[currentName as keyof typeof featureToggleState],
        enabled: featureToggleState[currentName as keyof typeof featureToggleState].enabled || toggles[currentName],
      },
    }),
    {},
  );
};

export const setToggles = (toggles: FeatureTogglesLocalStorageType) => {
  const localToggles = Object.keys(toggles).reduce(
    (acc, currentName) => ({
      ...acc,
      ...(toggles[currentName] !== featureToggleState[currentName as keyof typeof featureToggleState].enabled && {
        [currentName]: toggles[currentName],
      }),
    }),
    {},
  );

  if (isClient()) localStorage.setItem(FEATURE_TOGGLES_KEY, JSON.stringify(localToggles));
};
