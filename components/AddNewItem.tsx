import { MenuItem, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { AddNewItemPropsTypes } from '../lib/propsTypes';

const AddNewItem: FC<AddNewItemPropsTypes> = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem
        onClick={onOpen}
        _hover={{ color: 'white', bg: 'brand.400' }}
        _focus={{ color: 'white', bg: 'brand.400' }}
      >
        {item.name}
      </MenuItem>

      <item.Form isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddNewItem;
