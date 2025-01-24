'use client';

import React, { useEffect, useState } from 'react';

import { setToggles, useFeaturesBase } from '@common/featureToggles';
import { FeatureTogglesLocalStorageType } from '@common/featureToggles/types';
import { ToggleCheckBox } from '@ui/components';
import { Typography } from '@ui/components/Typography';

import { StyledButton, ToggleCard, ToggleInfo } from './styled';

export const ApplicationSettingsPage = () => {
  const [toggles, setTogglesState] = useState<FeatureTogglesLocalStorageType>({});
  const featureToggles = useFeaturesBase();

  useEffect(() => {
    const toggles = Object.keys(featureToggles).reduce(
      (acc, currentName) => ({
        ...acc,
        [currentName]: featureToggles[currentName].enabled,
      }),
      {},
    );
    setTogglesState(toggles);
  }, [featureToggles]);

  const onSaveHandler = () => {
    setToggles(toggles);
  };

  return (
    <>
      {Object.keys(featureToggles).map((name) => {
        const { description } = featureToggles[name];

        return (
          <ToggleCard key={name}>
            <ToggleInfo>
              <Typography variant="body1" tag="p">
                {name}
              </Typography>
              <Typography variant="body1" tag="p" color="tertiary">
                {description}
              </Typography>
            </ToggleInfo>
            <ToggleCheckBox
              checked={toggles[name]}
              onClick={() => setTogglesState({ ...toggles, [name]: !toggles[name] })}
            />
          </ToggleCard>
        );
      })}
      <StyledButton onClick={onSaveHandler}>Сохранить</StyledButton>
    </>
  );
};
