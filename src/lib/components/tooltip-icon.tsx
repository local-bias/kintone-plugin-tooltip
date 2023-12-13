import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import React, { FC, memo } from 'react';

type Props = { iconType: Plugin.IconType; iconColor: string };

const Component: FC<Props> = ({ iconType, iconColor }) => {
  switch (iconType) {
    case 'warning':
      return <ExclamationCircleIcon className='w-6 h-6 transition-all' fill={iconColor} />;
    case 'error':
      return <ExclamationTriangleIcon className='w-6 h-6 transition-all' fill={iconColor} />;
    case 'success':
      return <CheckCircleIcon className='w-6 h-6 transition-all' fill={iconColor} />;
    case 'info':
    default:
      return <InformationCircleIcon className='w-6 h-6 transition-all' fill={iconColor} />;
  }
};

export const TooltipIcon = Component;
