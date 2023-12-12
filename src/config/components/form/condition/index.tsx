import React, { memo, FC, FCX } from 'react';

import ConditionForm from './condition-form';
import ConditionDeletionButton from '../condition-deletion-button';
import styled from '@emotion/styled';

type ContainerProps = Readonly<{ condition: Plugin.Condition; index: number }>;
type Props = ContainerProps & {};

const Component: FCX<Props> = ({ className, condition, index }) => (
  <div className={className}>
    <ConditionForm {...{ condition, index }} />
    <ConditionDeletionButton {...{ index }} />
  </div>
);

const StyledComponent = styled(Component)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const Container: FC<ContainerProps> = memo(({ condition, index }) => {
  return <StyledComponent {...{ condition, index }} />;
});

export default Container;
