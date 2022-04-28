import { Box } from '@chakra-ui/layout';

import SidebarWithHeader from './SidebarWithHeader';

const MainLayout = ({ addItemsList }) => {
  return (
    <Box w="100%" h="100vh" p={0}>
      <Box flexBasis={{ lg: '100%', base: '100%' }}>
        <SidebarWithHeader addItemsList={addItemsList} />
      </Box>
    </Box>
  );
};

export default MainLayout;
