import { appFieldsState } from '@/config/states/kintone';
import { conditionFieldCodeState } from '@/config/states/plugin';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const Component: FC = () => {
  const value = useRecoilValue(conditionFieldCodeState);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(conditionFieldCodeState, value);
      },
    []
  );

  return <RecoilFieldSelect state={appFieldsState} fieldCode={value} onChange={onChange} />;
};

export default Component;
