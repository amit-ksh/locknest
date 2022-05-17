import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Text } from '@chakra-ui/layout';
import {
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { auth } from '../lib/mutations';

import AddNewItem from './AddNewItem';
import SearchBar from './SearchBar';

const MainHeader = ({ itemsList }) => {
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
    <Box w="100%" p={5}>
      <Flex justify="space-between" alignItems="center">
        <Flex flexBasis="60%" gap={4} alignItems="center">
          {/* ADD ITEM BUTTONS */}
          {itemsList.length > 1 ? (
            <Box>
              <Menu>
                <MenuButton
                  variant="primary"
                  as={Button}
                  leftIcon={<AddIcon />}
                  pr={{ md: 4, base: 1.5 }}
                >
                  <Text display={{ md: 'block', base: 'none' }}>Add</Text>
                </MenuButton>
                <MenuList bg="brand.500">
                  {itemsList.map((item) => (
                    <AddNewItem key={item.name} item={item} />
                  ))}
                </MenuList>
              </Menu>
            </Box>
          ) : (
            <Box>
              <ButtonGroup>
                <Button
                  variant="primary"
                  onClick={onOpen}
                  leftIcon={<AddIcon />}
                  pr={{ md: 4, base: 1.5 }}
                >
                  <Text display={{ md: 'block', base: 'none' }}>Add</Text>
                </Button>
              </ButtonGroup>
              {/* 
                  This will run only once. We have to do this because we can't access the 
                  'Form' component using this way 'itemsList[0].Form. Mapping the list array 
                  allow us to access the item 'Form' without indexing.
                */}
              {itemsList.map((item) => (
                <item.Form key={item.name} isOpen={isOpen} onClose={onClose} />
              ))}
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
            leftIcon={<FaPowerOff />}
            pr={{ md: 4, base: 1.5 }}
            isLoading={isLoading}
            onClick={handleSignout}
          >
            <Text display={{ md: 'block', base: 'none' }}>Sign out</Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainHeader;
