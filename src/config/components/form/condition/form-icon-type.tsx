import { getConditionPropertyState } from '@/config/states/plugin';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import { MenuItem, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => {
  const type = useRecoilValue(getConditionPropertyState({ index, property: 'iconType' }));
  const color = useRecoilValue(getConditionPropertyState({ index, property: 'iconColor' }));

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value) => {
        set(getConditionPropertyState({ index, property: 'iconType' }), value as Plugin.IconType);
      },
    [index]
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

const Container: FC<Props> = ({ index }) => {
  const type = useRecoilValue(getConditionPropertyState({ index, property: 'type' }));

  if (type !== 'icon') {
    return null;
  }
  return <Component index={index} />;
};

export default Container;
