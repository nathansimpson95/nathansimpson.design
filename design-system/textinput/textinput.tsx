/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Label, InputProps, useInputStyles } from './utils';

export const TextInput = ({
  isRequired = false,
  label,
  ...props
}: InputProps) => {
  const inputStyles = useInputStyles();

  return (
    <div>
      <Label label={label} isRequired={isRequired} />
      <input css={inputStyles} {...props} />
    </div>
  );
};
