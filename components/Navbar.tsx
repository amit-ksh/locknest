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
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
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
    route: '/passwords',
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
    route: '/personalinfos',
  },
  {
    name: 'IDs',
    icon: FaAddressCard,
    route: '/idcards',
  },
];

const Navbar = ({ toggleView, handleClick }) => {
  const router = useRouter();

  return (
    <VStack
      color="brand.500"
      w={{
        lg: 'full',
        base: !toggleView ? '100px' : 'full',
      }}
      h="full"
      p={4}
      spacing={12}
      align="flex-start"
    >
      <VStack w="100%" mt={3} alignItems="flex-start" spacing={4}>
        <Flex w="100%" justify="center" align="center">
          <IconButton
            display={{ lg: 'none', md: 'block', base: 'block' }}
            variant={toggleView ? 'danger' : 'primary'}
            aria-label="Open Menu"
            size="md"
            mr={{ lg: 4 }}
            p="auto"
            icon={toggleView ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleClick}
          />
          <Box display={{ lg: 'block', base: toggleView && 'none' }}>
            <Heading
              size="xl"
              display={{
                lg: 'block',
                md: toggleView ? 'block' : 'none',
                base: toggleView ? 'block' : 'none',
              }}
            >
              LockNest
            </Heading>
          </Box>
        </Flex>
      </VStack>

      <Flex w="100%" justify="space-around" align="center">
        <List w="100%" spacing={2}>
          {navMenu.map((item) => (
            <ListItem
              w="100%"
              key={item.name}
              fontSize="xl"
              fontWeight="bold"
              _hover={{ bg: 'brand.400', color: 'white' }}
              color={router.asPath === item.route ? 'white' : ''}
              bg={router.asPath === item.route ? 'brand.500' : ''}
              boxShadow="lg"
              rounded="md"
              mb={2}
            >
              <LinkBox py="10px" px="20px">
                <NextLink href={item.route} passHref>
                  <LinkOverlay
                    display="flex"
                    justifyItems="center"
                    alignItems="center"
                  >
                    <ListIcon as={item.icon} ml={1} mr={4} />
                    <Text
                      display={{
                        lg: 'block',
                        md: toggleView ? 'block' : 'none',
                        base: toggleView ? 'block' : 'none',
                      }}
                    >
                      {item.name}
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
