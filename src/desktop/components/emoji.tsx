import React, { FC } from 'react';

type Props = { condition: Plugin.Condition };

const TooltipEmojiContainer: FC<Props> = ({ condition }) => {
  if (condition.type !== 'emoji') {
    return null;
  }
  return <span className='text-lg cursor-default'>{condition.emoji}</span>;
};

export default TooltipEmojiContainer;
