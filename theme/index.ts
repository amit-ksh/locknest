import { extendTheme, withDefaultVariant } from '@chakra-ui/react';

const inputBrandRing = {
  _focus: {
    ring: 1,
    ringColor: 'brand.400',
  },
};

const buttonBrandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.400',
  },
};

const labelStyles = {
  parts: ['label'],
  baseStyle: {
    container: {
      color: 'brand.500',
    },
  },
};

const inputStyles = {
  variants: {
    outline: {
      field: {
        color: 'black',
        borderWidth: '2px',
        borderColor: 'brand.500',
        borderRadius: '3px',
        _focus: {
          borderColor: 'brand.400',
          ...inputBrandRing,
        },
        _hover: {
          borderColor: 'brand.400',
        },
      },
    },
  },
  defaultProps: {
    errorBorderColor: 'red.400',
  },
};

const buttonPrimaryStyles = {
  color: 'white',
  backgroundColor: 'brand.500',
  ...buttonBrandRing,

  _hover: {
    backgroundColor: 'brand.600',
    _disabled: { bgColor: 'brand.400' },
  },

  _active: {
    backgroundColor: 'brand.700',
  },
};

const buttonDangerStyles = {
  color: 'white',
  backgroundColor: 'red.500',

  _hover: {
    backgroundColor: 'red.600',
    _disabled: { bgColor: 'red.300' },
  },

  _focus: {
    ring: 0,
  },

  _active: {
    backgroundColor: 'red.700',
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#EBFFF8',
        100: '#B5F4DE',
        200: '#86E8C4',
        300: '#63DBB0',
        400: '#49CBA0',
        500: '#38B593',
        600: '#33BBA5',
        700: '#1FA69C',
        800: '#095E6B',
        900: '#002233',
      },
    },
    components: {
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
