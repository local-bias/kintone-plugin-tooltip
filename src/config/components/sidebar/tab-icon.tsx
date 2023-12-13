import { conditionsState } from '@/config/states/plugin';
import { TooltipIcon } from '@/lib/components/tooltip-icon';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type Props = { index: number };

const Icon: FC<Props> = ({ index }) => {
  const conditions = useRecoilValue(conditionsState);
  const { type, emoji, iconType, iconColor } = conditions[index];

  if (type === 'emoji') {
    return <span className='text-lg'>{emoji}</span>;
  }
  return <TooltipIcon iconType={iconType} iconColor={iconColor} />;
};

const Container: FC<Props> = (props) => {
  return <Icon {...props} />;
};

export default Container;
