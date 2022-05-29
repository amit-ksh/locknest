import { MenuItem, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { AddNewItemPropsTypes } from '../lib/propsTypes';

const AddNewItem: FC<AddNewItemPropsTypes> = ({ item }) => {
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

export default AddNewItem;
