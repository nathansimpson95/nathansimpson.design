/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from '../theme';
import { SyntheticEvent } from 'react';

export type InputProps = {
  onChange: (event: SyntheticEvent) => void;
  isRequired?: boolean;
  label: string;
  value: string | undefined;
};

export const useInputStyles = () => {
  const { radii, colors } = useTheme();
  return {
    background: colors.input.background,
    color: colors.input.foreground,
    border: `1px solid ${colors.global.border}`,
    fontSize: '1em',
    display: 'block',
    width: '100%',
    maxWidth: 400,
    padding: '0.75rem',
    borderRadius: radii.medium,
    boxSizing: 'border-box',
    transition: 'all 0.5s',
    '&:hover': {
      background: colors.input.backgroundHover,
      color: colors.input.foregroundHover
    },
    '&:active, &:focus': {
      background: colors.input.backgroundActive,
      color: colors.input.foregroundActive,
      outline: `2px solid ${colors.global.brand}`
    }
  } as const;
};

export const Label = ({
  label,
  isRequired
}: {
  label: string;
  isRequired: boolean;
}) => {
  const { colors, fontsizes } = useTheme();
  return (
    <label
      css={{
        fontSize: fontsizes.medium,
        color: colors.text.default,
        display: 'block',
        marginBottom: 6
      }}
    >
      {label}
      {isRequired && (
        <span css={{ color: colors.global.brand, marginLeft: 2 }}>*</span>
      )}
    </label>
  );
};
