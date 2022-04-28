import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/layout';
import { FiMenu } from 'react-icons/fi';
import {
  FaKey,
  FaCreditCard,
  FaAddressBook,
  FaAddressCard,
} from 'react-icons/fa';
import { BsGridFill, BsFillFileEarmarkLock2Fill } from 'react-icons/bs';

import MainHeader from './MainHeader';

const LinkItems = [
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

export default function SidebarWithHeader({ addItemsList }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100%" bg="gray.100">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="sm"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav addItemsList={addItemsList} onOpen={onOpen} />
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
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
      {LinkItems.map((link) => (
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

const MobileNav = ({ addItemsList, onOpen }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg="white"
      color="white"
      justifyContent={{ base: 'space-between' }}
    >
      <IconButton
        mr="4"
        display={{ base: 'flex', md: 'none' }}
        color="brand.500"
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <MainHeader addItemsList={addItemsList} />
    </Flex>
  );
};
