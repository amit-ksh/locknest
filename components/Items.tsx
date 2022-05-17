import { useState } from 'react';
import { Box, Divider, Flex, Text } from '@chakra-ui/layout';
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';

const Items = ({ items, Form }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemData, setItemData] = useState({});

  const handleClick = (item) => {
    setItemData(item);
    onOpen();
  };
  const handleClose = () => {
    setItemData({});
    onClose();
  };

  const handleDelete = (item) => {
    console.log('deleting item');
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
