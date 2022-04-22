import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/layout';
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { auth } from '../lib/mutations';

import AddNewItem from './AddNewItem';
import SearchBar from './SearchBar';

const Header = ({ menuItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Flex flexBasis="60%" gap={4}s alignItems="center">
          {/* ADD ITEM BUTTONS */}
          {menuItems.length > 1 ? (
            <Box>
              <Menu>
                <MenuButton
                  variant="primary"
                  as={Button}
                  leftIcon={<AddIcon />}
                >
                  Add
                </MenuButton>
                <MenuList>
                  {menuItems.map((item) => (
                    <AddNewItem key={item.name} item={item} />
                  ))}
                </MenuList>
              </Menu>
            </Box>
          ) : (
            <Box>
              <Button variant="primary" onClick={onOpen} leftIcon={<AddIcon />}>
                Add
              </Button>

              <menuItems.Form isOpen={isOpen} onClose={onClose} />
            </Box>
          )}

          {/* SEARCH BAR */}
          <Box w="60%" mr={2}>
            <SearchBar />
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
