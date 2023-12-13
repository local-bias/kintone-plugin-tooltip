import { conditionTypeState } from '@/config/states/plugin';
import { MenuItem, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

const Component: FC = () => {
  const type = useRecoilValue(conditionTypeState);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value: string) => {
        set(conditionTypeState, value as Plugin.ConditionType);
      },
    []
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
        <MenuItem value='emoji'>絵文字</MenuItem>
      </TextField>
    </div>
  );
};

export default Component;
