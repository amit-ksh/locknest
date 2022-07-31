import {  Button, MenuItem, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { OpenFormButtonPropsTypes } from '../lib/propsTypes';

const OpenFormButton: FC<OpenFormButtonPropsTypes> = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItemBGColor = useColorModeValue('brand.400', 'brand.700');

  return (
    <>
      <Button
        display='block'
        variant='primary'
        w='100%'
        onClick={onOpen}
        _hover={{ color: 'white', bg: menuItemBGColor }}
        _focus={{ color: 'white', bg: menuItemBGColor }}
      >
        {item.name}
      </Button>

      <item.Form isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default OpenFormButton;
