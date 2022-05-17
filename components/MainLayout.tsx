import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import ItemsLayout from './ItemsLayout';
import MainHeaderLayout from './MainHeaderLayout';
import Sidebar from './Sidebar';

const MainLayout = ({ itemsList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" w="100vw" h="100vh">
      <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        isFullHeight={false}
        onOverlayClick={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Header In Top */}
      <MainHeaderLayout itemsList={itemsList} onOpen={onOpen} />

      {/* User Content */}
      <ItemsLayout itemNames={itemsList} />
    </Box>
  );
};

export default MainLayout;
