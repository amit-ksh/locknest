import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/layout';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

const Header = ({ menuItems }) => {
  return (
    <Box w="100%" p={5} pt={7}>
      <Flex justify="space-between" alignItems="center">
        <Flex
          flexBasis="60%"
          gap={4}
          justify="space-between"
          alignItems="center"
        >
          <Box>
            <Menu>
              <MenuButton variant="primary" as={Button} leftIcon={<AddIcon />}>
                Add
              </MenuButton>
              <MenuList>
                {menuItems.map((item) => (
                  <MenuItem _hover={{ color: 'white', bg: 'brand.400' }}>
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>

          <Box w="60%">
            <InputGroup>
              <InputLeftElement
                pointerEvents="cursor"
                children={<SearchIcon color="brand.400" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>
          </Box>
        </Flex>
        <Box flexBasis="10%">
          <Button variant="danger">Sign Out</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
