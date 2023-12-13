import {
  conditionIconColorState,
  conditionIconTypeState,
  conditionTypeState,
} from '@/config/states/plugin';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import {
  PluginFormDescription,
  PluginFormSection,
  PluginFormTitle,
} from '@konomi-app/kintone-utilities-react';
import { MenuItem, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const Component: FC = () => {
  const type = useRecoilValue(conditionIconTypeState);
  const color = useRecoilValue(conditionIconColorState);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(conditionIconTypeState, value as Plugin.IconType);
      },
    []
  );

  return (
    <div>
      <TextField
        className='w-40'
        variant='outlined'
        color='primary'
        select
        label='アイコンタイプ'
        value={type}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value='info'>
          <div className='flex items-center gap-4'>
            <InformationCircleIcon className='text-gray-400 w-6 h-6' fill={color} />
            情報
          </div>
        </MenuItem>
        <MenuItem value='warning'>
          <div className='flex items-center gap-4'>
            <ExclamationCircleIcon className='text-gray-400 w-6 h-6' fill={color} />
            注意
          </div>
        </MenuItem>
        <MenuItem value='error'>
          <div className='flex items-center gap-4'>
            <ExclamationTriangleIcon className='text-gray-400 w-6 h-6' fill={color} />
            危険
          </div>
        </MenuItem>
        <MenuItem value='success'>
          <div className='flex items-center gap-4'>
            <CheckCircleIcon className='text-gray-400 w-6 h-6' fill={color} />
            チェック
          </div>
        </MenuItem>
      </TextField>
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
      <PluginFormTitle>アイコンの種類</PluginFormTitle>
      <PluginFormDescription last>アイコンの種類を指定してください。</PluginFormDescription>
      <Component />
    </PluginFormSection>
  );
};

export default Container;
