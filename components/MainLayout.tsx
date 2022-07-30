import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { MainlayoutPropsTypes } from '../lib/propsTypes';

import ItemsLayout from './ItemsLayout';
import MainHeaderLayout from './MainHeaderLayout';
import Sidebar from './Sidebar';

const MainLayout: FC<MainlayoutPropsTypes> = ({ itemsList }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" w="100%" h="100%">
      {/* Side Navbar in Desktop Mode */}
      <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} />

      {/* Side Navbar in Tablet and Mobile Mode */}
      <Drawer
        autoFocus={true}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        onOverlayClick={onClose}
        blockScrollOnMount={false}
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
