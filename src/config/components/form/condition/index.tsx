import React, { memo, FC, FCX } from 'react';

import ConditionForm from './condition-form';
import ConditionDeletionButton from '../condition-deletion-button';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';

type ContainerProps = Readonly<{ condition: Plugin.Condition; index: number }>;
type Props = ContainerProps & {};

const Component: FCX<Props> = ({ className, condition, index }) => (
  <Accordion>
    <AccordionSummary>
      設定{index + 1}: {condition.field} ➡ {condition.label}
    </AccordionSummary>
    <AccordionDetails>
      <div className={className}>
        <ConditionForm {...{ condition, index }} />
      </div>
    </AccordionDetails>
    <AccordionActions>
      <ConditionDeletionButton {...{ index }} />
    </AccordionActions>
  </Accordion>
);

const Container: FC<ContainerProps> = memo(({ condition, index }) => {
  return <Component {...{ condition, index }} />;
});

export default Container;
