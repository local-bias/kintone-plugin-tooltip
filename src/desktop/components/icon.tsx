import { TooltipIcon } from '@/lib/components/tooltip-icon';
import React, { FC } from 'react';

type Props = { condition: Plugin.Condition };

const Component: FC<Props> = ({ condition }) => {
  if (condition.type !== 'icon') {
    return null;
  }
  return <TooltipIcon iconType={condition.iconType} iconColor={condition.iconColor} />;
};

export default Component;
