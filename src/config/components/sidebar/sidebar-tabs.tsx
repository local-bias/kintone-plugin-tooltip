import { Tab } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { PluginConditionTabs } from '@konomi-app/kintone-utilities-react';
import { conditionsLengthState, tabIndexState } from '../../states/plugin';
import TabLabel from './tab-label';
import TabIcon from './tab-icon';

const Component: FC = () => {
  const tabIndex = useRecoilValue(tabIndexState);
  const length = useRecoilValue(conditionsLengthState);

  const onTabChange = useRecoilCallback(
    ({ set }) =>
      (_: any, index: number) => {
        set(tabIndexState, index);
      },
    []
  );

  return (
    <PluginConditionTabs tabIndex={tabIndex} onChange={onTabChange}>
      {new Array(length).fill('').map((_, i) => (
        <Tab
          icon={<TabIcon index={i} />}
          label={<TabLabel index={i} />}
          iconPosition='start'
          key={i}
        />
      ))}
    </PluginConditionTabs>
  );
};

export default Component;
