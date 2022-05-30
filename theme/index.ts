import { extendTheme, ThemeConfig, withDefaultVariant } from '@chakra-ui/react';
import { buttonDangerStyles, buttonPrimaryStyles } from './button';
import { brand } from './colors';
import { inputStyles, labelStyles } from './input';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    colors: {
      brand,
    },
    components: {
      styles: {
        global: {
          body: {
            bg: 'gray.100',
          },
        },
      },
      Button: {
        variants: {
          primary: {
            ...buttonPrimaryStyles,
          },
          danger: {
            ...buttonDangerStyles,
          },
        },
      },
      Input: { ...inputStyles },
      Form: { ...labelStyles },
    },
  },
  withDefaultVariant({
    variant: 'outline',
    components: ['Input', 'Textarea'],
  })
);

export default theme;
