import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { LinkBox, LinkOverlay } from '@chakra-ui/layout';
import {
  FaKey,
  FaCreditCard,
  FaAddressBook,
  FaAddressCard,
} from 'react-icons/fa';
import { BsGridFill, BsFillFileEarmarkLock2Fill } from 'react-icons/bs';
import { FC } from 'react';
import { SidebarPropsTypes } from '../types/props';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface LinkType {
  name: string;
  icon: FC<{}>;
  route: string;
}

const links: LinkType[] = [
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

const Sidebar: FC<SidebarPropsTypes> = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box
      bg={bg}
      borderRight="1px"
      borderRightColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" color="brand.500" fontWeight="bold">
          LockNest
        </Text>
        <Flex align="center" justify="space-between">
          <IconButton
            mr={2}
            aria-label="Toggle Mode"
            bg={colorMode === 'light' ? 'brand.800' : 'brand.300'}
            color="white"
            _hover={{
              ring: 2,
              ringColor: 'brand.400',
            }}
            _focus={{
              ring: 2,
              ringColor: 'brand.400',
            }}
            _active={{
              bg: colorMode === 'light' ? 'brand.900' : 'brand.100',
            }}
            onClick={toggleColorMode}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </IconButton>
          <CloseButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onClose}
          />
        </Flex>
      </Flex>
      {links.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          route={link.route}
          onClose={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, route, onClose, children }) => {
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
      onClick={onClose}
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
