import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  Divider,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import {
  FaKey,
  FaCreditCard,
  FaAddressBook,
  FaAddressCard,
} from 'react-icons/fa';
import { BsGridFill, BsFillFileEarmarkLock2Fill } from 'react-icons/bs';

const navMenu = [
  {
    name: 'All Items',
    icon: BsGridFill,
    route: '/',
  },
  {
    name: 'Password',
    icon: FaKey,
    route: '/password',
  },
  {
    name: 'Secure Notes',
    icon: BsFillFileEarmarkLock2Fill,
    route: '/securenotes',
  },
  {
    name: 'Payments',
    icon: FaCreditCard,
    route: '/payments',
  },
  {
    name: 'Personal Info',
    icon: FaAddressBook,
    route: '/personal',
  },
  {
    name: 'IDs',
    icon: FaAddressCard,
    route: '/id',
  },
];

const Navbar = ({ tabView, handleClick }) => {
  const router = useRouter();

  return (
    <VStack
      color="brand.500"
      w={{ lg: tabView ? '100px' : 'full', base: !tabView ? '100px' : 'full' }}
      h="full"
      p={4}
      spacing={12}
      align="flex-start"
    >
      <VStack w="100%" mt={3} alignItems="flex-start" spacing={4}>
        <Flex w="100%" justify="center" align="center">
          <IconButton
            display={{ lg: 'none', md: 'block', base: 'block' }}
            variant="primary"
            aria-label="Open Menu"
            size="md"
            mr={{ lg: !tabView && 4 }}
            icon={<HamburgerIcon />}
            onClick={handleClick}
          />
          <Box display={tabView && 'none'}>
            <Heading
              size="xl"
              display={{
                lg: tabView ? 'none' : 'block',
                md: tabView ? 'block' : 'none',
                base: tabView ? 'block' : 'none',
              }}
            >
              LockNest
            </Heading>
          </Box>
        </Flex>
      </VStack>

      <Flex w="100%" justify="space-around" align="center">
        <List w="100%" spacing={2}>
          {navMenu.map((menu) => (
            <ListItem
              w="100%"
              key={menu.name}
              py="10px"
              px="20px"
              fontSize={{ lg: 'xl', md: 'lg', base: 'lg' }}
              fontWeight="bold"
              _hover={{ bg: 'brand.400', color: 'white' }}
              color={router.asPath === menu.route ? 'white' : ''}
              bg={router.asPath === menu.route ? 'brand.500' : ''}
              boxShadow="lg"
              rounded="md"
              mb={2}
            >
              <LinkBox>
                <NextLink href={menu.route} passHref>
                  <LinkOverlay
                    display="flex"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <ListIcon as={menu.icon} ml={1} mr={4} />
                    <Text
                      display={{
                        lg: 'block',
                        md: tabView ? 'block' : 'none',
                        base: tabView ? 'block' : 'none',
                      }}
                    >
                      {menu.name}
                    </Text>
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Flex>
    </VStack>
  );
};

export default Navbar;
