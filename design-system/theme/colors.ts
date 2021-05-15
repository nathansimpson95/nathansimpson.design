export const palette = {
  orange: '#fa6d01',
  green: '#52e409',
  purple: '#E509E3',
  blue: '#089aef',
  neutral0: '#0c0f13',
  neutral10: '#13181d',
  neutral20: '#171d22',
  neutral30: '#1e242a',
  neutral40: '#272f37',
  neutral50: '#353f47',
  neutral60: '#48535d',
  neutral70: '#616e79',
  neutral80: '#808d99',
  neutral90: '#a0aeba',
  neutral100: '#ffffff'
};

const primary = palette.orange;

export const colors = {
  brand: palette.orange,
  brandSecondary: palette.neutral100,
  link: palette.orange,
  linkHover: palette.neutral100,
  background: palette.neutral10,
  backgroundEmphasis: palette.neutral30,
  backgroundHover: palette.neutral40,
  shadow: palette.neutral0,
  border: palette.neutral50,
  foregroundEmphasis: palette.neutral100,
  foreground: palette.neutral90,
  decorative: {
    green: palette.green,
    purple: palette.purple,
    blue: palette.blue
  },
  input: {
    background: palette.neutral40,
    foreground: palette.neutral90,
    hover: {
      background: palette.neutral50,
      foreground: palette.neutral100
    },
    active: {
      background: palette.neutral30,
      foreground: palette.neutral100
    }
  }
};

export const darkColors = {
  global: {
    brand: palette.orange,
    border: palette.neutral50,
    shadow: palette.neutral0
  },
  text: {
    default: palette.neutral90,
    emphasis: palette.neutral100,
    link: primary,
    linkHover: palette.neutral100
  },
  background: {
    default: palette.neutral10,
    emphasis: palette.neutral30,
    hover: palette.neutral40
  },
  input: {
    background: palette.neutral40,
    backgroundHover: palette.neutral50,
    backgroundActive: palette.neutral30,
    foreground: palette.neutral90,
    foregroundHover: palette.neutral100,
    foregroundActive: palette.neutral100
  },
  decorative: [palette.green, palette.purple, palette.blue]
};
