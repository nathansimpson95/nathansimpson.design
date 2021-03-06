/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Link } from 'gatsby';

import { useTheme, FontSizeType } from '../theme';

const getStyles = (size?: FontSizeType) => {
  const { colors, fontFamilies, fontsizes } = useTheme();

  return {
    color: colors.text.link,
    cursor: 'pointer',
    fontFamily: fontFamilies.body,
    fontSize: size ? fontsizes[size] : 'auto',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover, &:focus': {
      color: colors.text.linkHover,
      textDecoration: 'underline'
    }
  };
};

export const TextLink = ({
  size,
  ...props
}: {
  children: string;
  href: string;
  size?: FontSizeType;
}) => {
  return <a {...props} css={getStyles(size)} />;
};

export const TextLinkGatsby = ({
  size,
  ...props
}: {
  children: string;
  size?: FontSizeType;
  to: string;
}) => {
  return <Link css={getStyles(size)} {...props} />;
};
