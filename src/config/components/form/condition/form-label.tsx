import { getConditionPropertyState } from '@/config/states/plugin';
import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => {
  const value = useRecoilValue(getConditionPropertyState({ index, property: 'label' }));

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value) => {
        set(
          getConditionPropertyState({ index, property: 'label' }),
          value as Plugin.Condition['label']
        );
      },
    [index]
  );

  return (
    <div>
      <TextField
        className='w-80'
        multiline
        value={value}
        label='表示するヒント'
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Component;
