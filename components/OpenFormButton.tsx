import {  Button, MenuItem, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { OpenFormButtonPropsTypes } from '../types/props';

const OpenFormButton: FC<OpenFormButtonPropsTypes> = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItemBGColor = useColorModeValue('brand.500', 'brand.800');
  const menuItemFocusColor = useColorModeValue('brand.800', 'brand.500');

  return (
    <>
      <Button
        display='block'
        bg={menuItemBGColor}
        w='100%'
        onClick={onOpen}
        _hover={{ color: 'white', bg: menuItemFocusColor }}
        _focus={{ color: 'white', bg: menuItemFocusColor }}
      >
        {item.name}
      </Button>

      <item.Form isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default OpenFormButton;
