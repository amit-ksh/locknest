import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/layout';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Header: FC<{}> = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      p={4}
      bg="brand.500"
      color="white"
      justify="space-between"
      align="center"
    >
      <Heading size="xl">LockNest</Heading>
      <Flex align="center">
        <Text mr={2} fontSize={16} textDecor="underline">
          <NextLink
            href={{
              pathname: router.asPath === '/signin' ? '/signup' : '/signin',
            }}
            passHref
          >
            <Link>{router.asPath === '/signin' ? 'Sign Up' : 'Sign In'}</Link>
          </NextLink>
        </Text>
        <IconButton
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
      </Flex>
    </Flex>
  );
};

export default Header;
