import React, { ChangeEventHandler, FCX } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import produce from 'immer';

import { appFieldsState, storageState } from '../../../states';
import { MenuItem, TextField } from '@mui/material';

type ContainerProps = { condition: kintone.plugin.Condition; index: number };

const Component: FCX<ContainerProps> = ({ className, condition, index }) => {
  const appFields = useRecoilValue(appFieldsState);
  const setStorage = useSetRecoilState(storageState);

  const setConditionProps = <T extends keyof kintone.plugin.Condition>(
    key: T,
    value: kintone.plugin.Condition[T]
  ) => {
    setStorage((_, _storage = _!) =>
      produce(_storage, (draft) => {
        draft.conditions[index][key] = value;
      })
    );
  };

  const onFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setConditionProps('field', e.target.value);
  };

  const onLabelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setConditionProps('label', e.target.value);
  };

  return (
    <div {...{ className }}>
      <TextField
        sx={{ minWidth: '250px' }}
        select
        value={condition.field}
        label='対象フィールド'
        onChange={onFieldChange}
        className='input'
      >
        {Object.values(appFields).map(({ code, label }, i) => (
          <MenuItem key={i} value={code}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        multiline
        sx={{ minWidth: '350px' }}
        value={condition.label}
        label='表示するヒント'
        onChange={onLabelChange}
        className='input'
      />
    </div>
  );
};

const StyledComponent = styled(Component)`
  display: flex;
  gap: 1.5rem;
`;

export default StyledComponent;
