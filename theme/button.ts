import { mode } from '@chakra-ui/theme-tools';

const primaryButtonBrandRing = {
  ring: 2,
  ringColor: 'brand.400',
};

const dangerButtonBrandRing = {
  ring: 2,
  ringColor: 'red.400',
};

export const buttonPrimaryStyles = {
  color: 'white',
  backgroundColor: 'brand.500',

  _hover: {
    ...primaryButtonBrandRing,
    backgroundColor: 'brand.600',
    _disabled: { bgColor: 'brand.400' },
  },

  _focus: {
    ...primaryButtonBrandRing,
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
    ...dangerButtonBrandRing,
    backgroundColor: 'red.600',
    _disabled: { bgColor: 'red.300' },
  },

  _focus: {
    ...dangerButtonBrandRing,
    backgroundColor: 'red.600',
    _disabled: { bgColor: 'red.300' },
  },

  _active: {
    backgroundColor: 'red.700',
  },
};
