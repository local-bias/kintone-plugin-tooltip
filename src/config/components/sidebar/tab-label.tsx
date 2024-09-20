import { conditionsState } from '@/config/states/plugin';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type Props = { index: number };

const Label: FC<Props> = ({ index }) => {
  const conditions = useRecoilValue(conditionsState);
  const { fieldCode } = conditions[index];

  return (
    <>
      <div className='text-[11px] leading-4 text-gray-400'>設定{index + 1}</div>
      <div className='text-sm text-gray-600'>{`${fieldCode || '未設定'}`}</div>
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
