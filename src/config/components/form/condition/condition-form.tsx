import React, { ChangeEventHandler, FCX } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { produce } from 'immer';
import { kintoneAPI } from '@konomi-app/kintone-utilities';

import { Autocomplete, TextField } from '@mui/material';
import { appFieldsState } from '../../../states/kintone';
import { storageState } from '../../../states/plugin';

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

  const onFieldChange = (field: kintoneAPI.FieldProperty | null) => {
    if (field) {
      setConditionProps('field', field.code);
    }
  };

  const onLabelChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setConditionProps('label', e.target.value);
  };

  return (
    <div {...{ className }}>
      <Autocomplete
        value={appFields.find((field) => field.code === condition.field)}
        sx={{ minWidth: '250px' }}
        options={appFields}
        onChange={(_, option) => onFieldChange(option)}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} label='対象フィールド' variant='outlined' color='primary' />
        )}
      />
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
