import { getConditionPropertyState } from '@/config/states/plugin';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';

type OptionValue = Plugin.Condition['targetEvents'][number];

const OPTIONS: { value: OptionValue; label: string }[] = [
  {
    value: 'create',
    label: 'レコード追加画面',
  },
  {
    value: 'edit',
    label: 'レコード編集画面',
  },
  {
    value: 'detail',
    label: 'レコード詳細画面',
  },
  {
    value: 'index',
    label: '一覧画面',
  },
];

const state = getConditionPropertyState('targetEvents');

const Component: FC = () => {
  const value = useRecoilValue(state);

  const onChange = useRecoilCallback(
    ({ set }) =>
      (value: OptionValue, checked: boolean) => {
        set(state, (prev) => {
          if (checked) {
            return [...prev, value];
          }
          return prev.filter((v) => v !== value);
        });
      },
    []
  );

  return (
    <div>
      <FormGroup>
        {OPTIONS.map((option) => (
          <FormControlLabel
            key={option.value}
            control={
              <Checkbox
                checked={value.includes(option.value)}
                onChange={(_, checked) => onChange(option.value, checked)}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </div>
  );
};

export default Component;
