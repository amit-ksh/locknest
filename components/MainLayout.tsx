import { Box, Flex, Heading } from '@chakra-ui/layout';
import { useState } from 'react';
import Navbar from './Navbar';

const MainLayout = () => {
  const [tabView, setTabView] = useState(false);

  return (
    <Box w="100%" h="100vh" p={0}>
      <Flex w="100%" h="100%" direction="row">
        <Box flexBasis={tabView ? '100px' : '25%'}>
          <Navbar tabView={tabView} handleClick={() => setTabView(!tabView)} />
        </Box>
        <Box bg="brand.400" p="1rem" flexBasis="100%">
          <Heading>Main</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainLayout;
