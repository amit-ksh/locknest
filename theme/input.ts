import { mode } from '@chakra-ui/theme-tools';

const inputBrandRing = {
  _focus: {
    ring: 1,
    ringColor: 'brand.400',
  },
};

export const labelStyles = {
  parts: ['label'],
  baseStyle: {
    container: {
      color: 'brand.500',
    },
  },
};

export const inputStyles = {
  variants: {
    filled: {
      field: {
        color: mode('brand.400', 'brand.600'),
        borderRadius: '3px',
        _focus: {
          borderColor: 'brand.400',
          ...inputBrandRing,
        }
      },
    },
  },
  defaultProps: {
    errorBorderColor: 'red.400',
  },
};
