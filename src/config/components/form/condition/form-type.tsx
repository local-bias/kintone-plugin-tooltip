import { getConditionPropertyState } from '@/config/states/plugin';
import { MenuItem, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => {
  const type = useRecoilValue(getConditionPropertyState({ index, property: 'type' }));

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value) => {
        set(
          getConditionPropertyState({ index, property: 'type' }),
          value as Plugin.Condition['type']
        );
      },
    [index]
  );

  return (
    <div>
      <TextField
        variant='outlined'
        color='primary'
        select
        label='表示タイプ'
        value={type}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value='icon'>アイコン</MenuItem>
        {/* <MenuItem value='emoji'>絵文字</MenuItem> */}
      </TextField>
    </div>
  );
};

export default Component;
