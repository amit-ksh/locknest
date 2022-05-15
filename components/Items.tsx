import { Box, Heading } from '@chakra-ui/layout';

const Items = ({ name, items }) => {
  return (
    <Box>
      <Box>
        <Heading as="h3" size="md">
          {name}
        </Heading>
      </Box>
    </Box>
  );
};

export default Items;
