type FeatureToggleType = {
  enabled: boolean;
  description: string;
};

export type FeatureTogglesType = Record<string, FeatureToggleType>;

export type FeatureTogglesLocalStorageType = Record<string, boolean>;
