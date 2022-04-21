import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/layout';
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { auth } from '../lib/mutations';

import AddNewItem from './AddNewItem';

const Header = ({ menuItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignout = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await auth('signout');
    setIsLoading(false);
    router.push('/signin');
  };

  return (
    <Box w="100%" p={5} pt={7}>
      <Flex justify="space-between" alignItems="center">
        <Flex
          flexBasis="60%"
          gap={4}
          justify="space-between"
          alignItems="center"
        >
          {/* ADD ITEM BUTTONS */}
          <Box>
            <Menu>
              <MenuButton variant="primary" as={Button} leftIcon={<AddIcon />}>
                Add
              </MenuButton>
              <MenuList>
                {menuItems.map((item) => (
                  <AddNewItem key={item.name} item={item} />
                ))}
              </MenuList>
            </Menu>
          </Box>

          {/* SEARCH BAR */}
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

        {/* SIGN OUT */}
        <Box flexBasis="10%">
          <Button
            variant="danger"
            type="submit"
            isLoading={isLoading}
            onClick={handleSignout}
          >
            Sign Out
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
