import { getConditionPropertyState } from '@/config/states/plugin';
import { TooltipIcon } from '@/lib/components/tooltip-icon';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

type Props = { index: number };

const Icon: FC<Props> = ({ index }) => {
  const iconType = useRecoilValue(
    getConditionPropertyState({ index, property: 'iconType' })
  ) as Plugin.IconType;
  const iconColor = useRecoilValue(getConditionPropertyState({ index, property: 'iconColor' }));

  return <TooltipIcon iconType={iconType} iconColor={iconColor} />;
};

const Component: FC<Props> = ({ index }) => {
  const type = useRecoilValue(getConditionPropertyState({ index, property: 'type' }));

  if (type === 'icon') {
    return <Icon index={index} />;
  }

  return <>emoji</>;
};

export default Component;
