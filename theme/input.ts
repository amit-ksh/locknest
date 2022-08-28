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
    outline: {
      field: {
        color: mode('brand.400', 'white'),
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
