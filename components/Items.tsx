import { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { itemCRUD } from '../lib/mutations';
import { createToast } from '../lib/form';

const Items = ({ items, type, Form }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemData, setItemData] = useState({});
  const toast = useToast();

  const handleClick = (item) => {
    setItemData(item);
    onOpen();
  };
  const handleClose = () => {
    setItemData({});
    onClose();
  };

  const handleDelete = async (item) => {
    onClose();
    const { success } = await itemCRUD('delete', {
      data: { id: item.id },
      type,
    });

    const itemName = type[0].toUpperCase() + type.slice(1);
    if (success) {
      createToast(toast, `${itemName} Deleted.`, '', 'error');
    } else {
      createToast(toast, 'Error!', type + `${itemName} Not Deleted.`, 'error');
    }
  };

  return (
    <Box mb={4}>
      {/* Items */}
      {!items.error &&
        items.map((item, idx) => (
          <Flex
            key={`${item.name}${idx}`}
            justify="space-between"
            align="center"
            mb={1}
          >
            {/* Item Info */}
            <Button
              display="block"
              textAlign="left"
              justifySelf="flex-start"
              flexBasis="100%"
              mr={1}
              onClick={() => handleClick(item)}
            >
              <Box p={2}>
                <Text fontWeight="semibold" fontSize="lg">
                  {item.name}
                </Text>
              </Box>
            </Button>

            {/* Edit Button */}
            <Box justifySelf="flex-end">
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
        ))}

      {/* Form */}
      <Form isOpen={isOpen} onClose={() => handleClose()} item={itemData} />
    </Box>
  );
};

export default Items;
