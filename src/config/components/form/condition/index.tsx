import React, { memo, FC, FCX } from 'react';

import ConditionForm from './condition-form';
import ConditionDeletionButton from '../condition-deletion-button';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';
import AccordionSummaryLabel from './accordion-summary-label';
import AccordionSummaryPreview from './accordion-summary-preview';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => (
  <Accordion>
    <AccordionSummary>
      <div className='flex items-center gap-4'>
        <AccordionSummaryPreview index={index} />
        <AccordionSummaryLabel index={index} />
      </div>
    </AccordionSummary>
    <AccordionDetails>
      <ConditionForm {...{ index }} />
    </AccordionDetails>
    <AccordionActions>
      <ConditionDeletionButton {...{ index }} />
    </AccordionActions>
  </Accordion>
);

export default memo(Component);
