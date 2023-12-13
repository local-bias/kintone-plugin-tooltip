import { conditionIconColorState, conditionTypeState } from '@/config/states/plugin';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
} from '@konomi-app/kintone-utilities-react';
import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const Component: FC = () => {
  const value = useRecoilValue(conditionIconColorState);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(conditionIconColorState, value);
      },
    []
  );

  return (
    <div className='flex gap-2'>
      <TextField
        className='w-30'
        variant='outlined'
        color='primary'
        label='アイコンの色'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <TextField
        className='w-30'
        variant='outlined'
        color='primary'
        type='color'
        label='アイコンの色'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const Container = () => {
  const type = useRecoilValue(conditionTypeState);
  if (type !== 'icon') {
    return null;
  }
  return (
    <PluginFormSection>
      <PluginFormTitle>アイコンの色</PluginFormTitle>
      <PluginFormDescription last>
        アイコンの色を指定してください。色は16進数のカラーコードで指定することもできます。
      </PluginFormDescription>
      <Component />
    </PluginFormSection>
  );
};

export default Container;
