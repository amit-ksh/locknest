import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, CloseButton, Flex, Icon, Text } from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/layout';
import {
  FaKey,
  FaCreditCard,
  FaAddressBook,
  FaAddressCard,
} from 'react-icons/fa';
import { BsGridFill, BsFillFileEarmarkLock2Fill } from 'react-icons/bs';

const links = [
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

const Sidebar = ({ onClose, ...rest }) => {
  return (
    <Box
      bg="white"
      borderRight="1px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" color="brand.500" fontWeight="bold">
          LockNest
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {links.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, route, children }) => {
  const router = useRouter();

  return (
    <LinkBox
      p="4"
      mx="4"
      my="2"
      borderRadius="md"
      role="group"
      cursor="pointer"
      color={router.asPath === route ? 'white' : ''}
      bg={router.asPath === route ? 'brand.500' : ''}
      _hover={{
        bg: 'brand.400',
        color: 'white',
      }}
    >
      <NextLink href={route} passHref>
        <LinkOverlay display="flex" justifyItems="center" alignItems="center">
          <Flex align="center">
            {icon && (
              <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                  color: 'white',
                }}
                as={icon}
              />
            )}
            {children}
          </Flex>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
};

export default Sidebar;
