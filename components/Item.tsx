import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from '@chakra-ui/react';
import { useStoreActions } from 'easy-peasy';
import { BsThreeDots } from 'react-icons/bs';
import { createToast } from '../lib/form';
import { itemCRUD } from '../lib/mutations';

const Item = ({ item, type, setItemData, onOpen, onClose }) => {
  const deleteItem = useStoreActions((actions: any) => actions.deleteItem);
  const toast = useToast();

  const handleClick = (item) => {
    setItemData(item);
    onOpen();
  };

  const handleDelete = async (item) => {
    onClose();
    let itemName = type.split(' ').join('').toLowerCase();

    try {
      const { id, error } = await itemCRUD('delete', {
        data: { id: item.id },
        type: itemName,
      });

      if (id) {
        deleteItem({ itemName, item });
        createToast(toast, `${type} Deleted.`, '', 'error');
      } else {
        console.log(error);

        createToast(toast, 'Error!', error, 'error');
      }
    } catch (e) {
      console.log(e.message);
      createToast(
        toast,
        'Error!',
        'Something went wrong. Try Again Later!',
        'error'
      );
    }
  };

  return (
    <Flex justify="space-between" align="center" mb={1}>
      {/* Item Info */}
      <Button
        display="block"
        textAlign="left"
        justifySelf="flex-start"
        flexBasis="100%"
        mr={1}
        _focus={{
          ring: 3,
          ringColor: 'brand.300',
        }}
        onClick={() => handleClick(item)}
      >
        <Box p={2}>
          <Text fontWeight="semibold" fontSize="lg">
            {item.name}
          </Text>
        </Box>
      </Button>

      {/* Edit Button */}
      <Box justifySelf="flex-end" cursor="pointer">
        <Menu>
          <MenuButton as="div">
            <IconButton aria-label="Edit Button" icon={<BsThreeDots />} />
          </MenuButton>
          <MenuList>
            <MenuItem
              _hover={{ bg: 'gray.500', color: 'white' }}
              _focus={{ bg: 'gray.500', color: 'white' }}
              onClick={() => handleClick(item)}
            >
              Edit
            </MenuItem>
            <MenuItem
              color="red.500"
              _hover={{ bg: 'red.500', color: 'white' }}
              _focus={{ bg: 'red.500', color: 'white' }}
              onClick={() => handleDelete(item)}
            >
              Delete
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Item;
