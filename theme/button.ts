import { mode } from '@chakra-ui/theme-tools';

const buttonBrandRing = {
  _focus: {
    ring: 2,
    ringColor: 'brand.400',
  },
};

export const buttonPrimaryStyles = {
  color: 'white',
  backgroundColor: 'brand.500',
  ...buttonBrandRing,

  _hover: {
    backgroundColor: 'brand.600',
    _disabled: { bgColor: 'brand.400' },
  },

  _focus: {
    backgroundColor: 'brand.600',
    _disabled: { bgColor: 'brand.400' },
  },

  _active: {
    backgroundColor: 'brand.700',
  },
};

export const buttonDangerStyles = {
  color: 'white',
  backgroundColor: 'red.500',

  _hover: {
    backgroundColor: 'red.600',
    _disabled: { bgColor: 'red.300' },
  },

  _focus: {
    backgroundColor: 'red.600',
    _disabled: { bgColor: 'red.300' },
  },

  _active: {
    backgroundColor: 'red.700',
  },
};
