import { MenuItem, useDisclosure } from '@chakra-ui/react';
import { useRef } from 'react';

const AddNewItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <MenuItem
        ref={btnRef}
        onClick={onOpen}
        _hover={{ color: 'white', bg: 'brand.400' }}
      >
        {item.name}
      </MenuItem>

      <item.Form isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  );
};

export default AddNewItem;
