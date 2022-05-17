import { Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import MainHeader from './MainHeader';

const MainHeaderLayout = ({ itemsList, onOpen }) => {
  return (
    <Flex
      zIndex={5}
      pos="sticky"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      top={0}
      height={20}
      bg="white"
      color="white"
      align="center"
      gap={4}
    >
      <IconButton
        mx={4}
        display={{ base: 'flex', md: 'none' }}
        color="brand.500"
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <MainHeader itemsList={itemsList} />
    </Flex>
  );
};

export default MainHeaderLayout;
