import React, { ChangeEventHandler, FCX } from 'react';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { produce } from 'immer';

import { TextField } from '@mui/material';
import { appFieldsState } from '../../../states/kintone';
import { getConditionPropertyState, storageState } from '../../../states/plugin';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';

type ContainerProps = { condition: Plugin.Condition; index: number };

const Component: FCX<ContainerProps> = ({ className, condition, index }) => {
  const onFieldChange = useRecoilCallback(
    ({ set }) =>
      (fieldCode: string) => {
        set(getConditionPropertyState({ index, property: 'field' }), fieldCode);
      },
    [index]
  );

  const onLabelChange: ChangeEventHandler<HTMLInputElement> = useRecoilCallback(
    ({ set }) =>
      ({ target }) => {
        set(getConditionPropertyState({ index, property: 'label' }), target.value);
      },
    [index]
  );

  return (
    <div {...{ className }}>
      <RecoilFieldSelect
        state={appFieldsState}
        fieldCode={condition.field}
        onChange={onFieldChange}
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
