import { MenuItem, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { OpenFormButtonPropsTypes } from '../lib/propsTypes';

const OpenFormButton: FC<OpenFormButtonPropsTypes> = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuItemBGColor = useColorModeValue('brand.400', 'brand.700');

  return (
    <>
      <MenuItem
        onClick={onOpen}
        _hover={{ color: 'white', bg: menuItemBGColor }}
        _focus={{ color: 'white', bg: menuItemBGColor }}
      >
        {item.name}
      </MenuItem>

      <item.Form isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default OpenFormButton;
