import React, { ChangeEventHandler, FCX } from 'react';
import { useRecoilCallback } from 'recoil';

import { TextField } from '@mui/material';
import { appFieldsState } from '../../../states/kintone';
import { getConditionPropertyState } from '../../../states/plugin';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';
import TypeForm from './form-type';
import IconTypeForm from './form-icon-type';
import IconColorForm from './form-icon-color';
import LabelForm from './form-label';
import FieldcodeForm from './form-fieldcode';

type ContainerProps = { index: number };

const Component: FCX<ContainerProps> = ({ index }) => {
  return (
    <div className='grid gap-4'>
      <div className='flex gap-2'>
        <FieldcodeForm index={index} />
        <LabelForm index={index} />
      </div>
      <div className='flex gap-2'>
        <TypeForm index={index} />
        <IconTypeForm index={index} />
        <IconColorForm index={index} />
      </div>
    </div>
  );
};

export default Component;
