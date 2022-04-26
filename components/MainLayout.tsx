import { Box, Divider, Flex } from '@chakra-ui/layout';
import { useState } from 'react';

import Navbar from './Navbar';
import MainHeader from './MainHeader';

const MainLayout = ({ navItems }) => {
  const [toggleView, setToggleView] = useState(false);

  return (
    <Box w="100%" h="100vh" p={0}>
      <Flex w="100%" h="100%" direction="row">
        <Box flexBasis={{ lg: '25%', base: toggleView ? '100%' : '100px' }}>
          <Navbar
            toggleView={toggleView}
            handleClick={() => setToggleView(!toggleView)}
          />
        </Box>
        <Box
          flexBasis="100%"
          display={{ lg: 'block', base: toggleView ? 'none' : 'block' }}
        >
          <MainHeader navItems={navItems} />
          <Divider />
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
