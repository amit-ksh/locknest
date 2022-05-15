import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

import ItemsLayout from './ItemsLayout';
import MainHeaderLayout from './MainHeaderLayout';
import Sidebar from './Sidebar';

const MainLayout = ({ addItemsList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100%" bg="gray.100">
      <Sidebar
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
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* Header In Top */}
      <MainHeaderLayout addItemsList={addItemsList} onOpen={onOpen} />

      {/* User Content */}
      <Box minH="89vh" ml={{ base: 0, md: 60 }} p={4}>
        {/* <ItemsLayout items={addItemsList} /> */}
        {new Array(10).fill(1).map((_, idx) => (
          <Box key={idx}>Item {idx + 1}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default MainLayout;
