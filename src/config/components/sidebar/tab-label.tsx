import { conditionsState } from '@/config/states/plugin';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type Props = { index: number };

const Label: FC<Props> = ({ index }) => {
  const conditions = useRecoilValue(conditionsState);
  const { fieldCode } = conditions[index];

  return (
    <>
      設定{index + 1}: {fieldCode}
    </>
  );
};

const Container: FC<Props> = (props) => {
  return (
    <div className='pl-4'>
      <Label {...props} />
    </div>
  );
};

export default Container;
