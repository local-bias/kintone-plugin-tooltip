import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@mui/material';
import React, { ChangeEventHandler, FC, FCX, Suspense } from 'react';
import { RecoilState, useRecoilCallback, useRecoilValue } from 'recoil';

type Props = {
  state: RecoilState<string>;
  width?: number;
} & Omit<TextFieldProps, 'value' | 'onChange'>;

const Component: FCX<Props> = ({ className, state, ...textFieldProps }) => {
  const query = useRecoilValue(state);

  const onChange: ChangeEventHandler<HTMLInputElement> = useRecoilCallback(
    ({ set }) =>
      (event) => {
        set(state, event.target.value);
      },
    []
  );

  return (
    <div className={className}>
      <TextField {...textFieldProps} value={query} onChange={onChange} />
      <TextField {...textFieldProps} type='color' value={query} onChange={onChange} />
    </div>
  );
};
Component.displayName = 'RecoilColorPickerComponent';

const PlaceHolder: FCX<Props> = ({ className, label, placeholder, width }) => (
  <div className={className}>
    <TextField label={label} placeholder={placeholder} value='' sx={{ width }} disabled />
    <TextField label={label} placeholder={placeholder} value='' sx={{ width }} disabled />
  </div>
);
PlaceHolder.displayName = 'RecoilColorPickerPlaceHolder';

const Styled = (component: FC<any>) => styled(component)`
  display: flex;
  gap: 8px;
`;

const StyledPlaceHolder = Styled(PlaceHolder);
const StyledComponent = Styled(Component);

const Container: FC<Props> = (props) => {
  const completed: Props = { ...props, sx: { width: 120, ...props.sx } };

  return (
    <Suspense fallback={<StyledPlaceHolder {...completed} />}>
      <StyledComponent {...completed} />
    </Suspense>
  );
};
Container.displayName = 'RecoilColorPickerContainer';

export const RecoilColorPicker = Container;
