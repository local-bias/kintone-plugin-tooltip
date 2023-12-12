import { getConditionPropertyState } from '@/config/states/plugin';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => {
  const fieldCode = useRecoilValue(getConditionPropertyState({ index, property: 'fieldCode' }));
  const label = useRecoilValue(getConditionPropertyState({ index, property: 'label' }));

  return (
    <>
      設定{index + 1}: {fieldCode} ➡ {label}
    </>
  );
};

export default Component;
