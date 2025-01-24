import { useContext } from 'react';

import { FeatureTogglesContext } from './context';

export const useFeaturesBase = () => useContext(FeatureTogglesContext);
