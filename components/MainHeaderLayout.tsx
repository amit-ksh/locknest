import { Flex } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import MainHeader from './MainHeader';

const MainHeaderLayout = ({ addItemsList, onOpen }) => {
  return (
    <Flex
      pos="sticky"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      top="0"
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

export default MainHeaderLayout;
