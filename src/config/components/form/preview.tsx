import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { selectedConditionState } from '@/config/states/plugin';
import { TooltipIcon } from '@/lib/components/tooltip-icon';
import { sanitize } from 'dompurify';
import React, { type FC } from 'react';
import { useRecoilValue } from 'recoil';

const Emoji: FC = () => {
  const condition = useRecoilValue(selectedConditionState);
  if (condition.type !== 'emoji') {
    return null;
  }
  return <span className='text-lg cursor-default'>{condition.emoji}</span>;
};

const Icon: FC = () => {
  const condition = useRecoilValue(selectedConditionState);
  if (condition.type !== 'icon') {
    return null;
  }
  return <TooltipIcon iconType={condition.iconType} iconColor={condition.iconColor} />;
};

const Component: FC = () => {
  const condition = useRecoilValue(selectedConditionState);

  return (
    <div className='w-24 h-24 grid place-items-center border rounded-sm'>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger className='grid place-items-center'>
            <Icon />
            <Emoji />
          </TooltipTrigger>
          <TooltipContent
            style={{
              backgroundColor: condition.backgroundColor,
              color: condition.foregroundColor,
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: sanitize(condition.label) }} />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Component;
