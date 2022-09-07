import { Flex } from '@chakra-ui/layout';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';
import { FiMenu } from 'react-icons/fi';
import { MainHeaderLayoutPropsTypes } from '../types/props';
import MainHeader from './MainHeader';

const MainHeaderLayout: FC<MainHeaderLayoutPropsTypes> = ({
  itemsList,
  onOpen,
}) => {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      zIndex={5}
      pos="sticky"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      top={0}
      height={20}
      bg={bg}
      color="white"
      align="center"
      gap={4}
    >
      <IconButton
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
