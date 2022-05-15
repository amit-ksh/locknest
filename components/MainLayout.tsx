import { Box } from '@chakra-ui/layout';

import ItemsLayout from './ItemsLayout';

import SidebarWithHeader from './SidebarWithHeader';

const MainLayout = ({ addItemsList }) => {
  return (
    <Box w="100%" h="100vh" p={0}>
      <Box>
        <SidebarWithHeader addItemsList={addItemsList} />
      </Box>
      <Box
        position="absolute"
        left={60}
        w="100%"
        h="89%"
        p={4}
        overflowY="scroll"
      >
        <ItemsLayout items={addItemsList} />
      </Box>
    </Box>
  );
};

export default MainLayout;
