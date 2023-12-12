import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import React, { FC } from 'react';

type Props = { condition: Plugin.Condition };

const Component: FC<Props> = ({ condition }) => {
  if (condition.type !== 'icon') {
    return null;
  }

  switch (condition.iconType) {
    case 'warning':
      return (
        <ExclamationCircleIcon className='w-6 h-6 transition-all' fill={condition.iconColor} />
      );
    case 'error':
      return (
        <ExclamationTriangleIcon className='w-6 h-6 transition-all' fill={condition.iconColor} />
      );
    case 'success':
      return <CheckCircleIcon className='w-6 h-6 transition-all' fill={condition.iconColor} />;
    case 'info':
    default:
      return (
        <InformationCircleIcon className='w-6 h-6 transition-all' fill={condition.iconColor} />
      );
  }
};

export default Component;
