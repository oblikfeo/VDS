import React from 'react';

import { FeatureTogglesType } from './types';

export const FeatureTogglesContext = React.createContext<FeatureTogglesType>({});

export const FeatureTogglesContextProvider = FeatureTogglesContext.Provider;
