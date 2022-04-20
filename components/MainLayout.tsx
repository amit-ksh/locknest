import { Box, Divider, Flex } from '@chakra-ui/layout';
import { useState } from 'react';
import Navbar from './Navbar';
import Header from './Header';

const MainLayout = ({ menuItems }) => {
  const [tabView, setTabView] = useState(false);

  return (
    <Box w="100%" h="100vh" p={0}>
      <Flex w="100%" h="100%" direction="row">
        <Box flexBasis={tabView ? '100px' : '25%'}>
          <Navbar tabView={tabView} handleClick={() => setTabView(!tabView)} />
        </Box>
        <Box flexBasis="100%">
          <Header menuItems={menuItems} />
          <Divider />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
