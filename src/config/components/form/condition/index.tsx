import React, { memo, FC, FCX } from 'react';

import ConditionForm from './condition-form';
import ConditionDeletionButton from '../condition-deletion-button';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material';
import AccordionSummaryLabel from './accordion-summary-label';

type Props = { index: number };

const Component: FC<Props> = ({ index }) => (
  <Accordion>
    <AccordionSummary>
      <AccordionSummaryLabel index={index} />
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
