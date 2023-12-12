import { appFieldsState } from '@/config/states/kintone';
import { getConditionPropertyState } from '@/config/states/plugin';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => {
  const value = useRecoilValue(getConditionPropertyState({ index, property: 'fieldCode' }));

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value) => {
        set(
          getConditionPropertyState({ index, property: 'fieldCode' }),
          value as Plugin.Condition['fieldCode']
        );
      },
    [index]
  );

  return <RecoilFieldSelect state={appFieldsState} fieldCode={value} onChange={onChange} />;
};

export default Component;
