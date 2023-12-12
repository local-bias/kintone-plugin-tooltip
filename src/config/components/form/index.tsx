import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { conditionsLengthState } from '../../states/plugin';
import ConditionAdditionButton from './condition-addition-button';
import Condition from './condition';

const Component: FC = () => {
  const length = useRecoilValue(conditionsLengthState);

  return (
    <div className='grid gap-2'>
      {new Array(length).fill('').map((_, index) => (
        <Condition key={index} index={index} />
      ))}
      <ConditionAdditionButton />
    </div>
  );
};

export default Component;
