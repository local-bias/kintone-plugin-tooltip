import { getConditionPropertyState } from '@/config/states/plugin';
import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => {
  const value = useRecoilValue(getConditionPropertyState({ index, property: 'iconColor' }));

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value) => {
        set(getConditionPropertyState({ index, property: 'iconColor' }), value as string);
      },
    [index]
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

const Container: FC<Props> = ({ index }) => {
  const type = useRecoilValue(getConditionPropertyState({ index, property: 'type' }));

  if (type !== 'icon') {
    return null;
  }
  return <Component index={index} />;
};

export default Container;
