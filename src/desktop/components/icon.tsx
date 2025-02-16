import { TooltipIcon } from '@/lib/components/tooltip-icon';
import { PluginCondition } from '@/schema/plugin-config';
import { FC } from 'react';

type Props = { condition: PluginCondition };

const TooltipIconContainer: FC<Props> = ({ condition }) => {
  if (condition.type !== 'icon') {
    return null;
  }
  return <TooltipIcon iconType={condition.iconType} iconColor={condition.iconColor} />;
};

export default TooltipIconContainer;
