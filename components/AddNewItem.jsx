import { MenuItem, useDisclosure } from '@chakra-ui/react';

const AddNewItem = ({ item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuItem onClick={onOpen} _hover={{ color: 'white', bg: 'brand.400' }}>
        {item.name}
      </MenuItem>

      <item.Form isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddNewItem;
