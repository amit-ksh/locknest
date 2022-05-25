import { Box, Heading } from '@chakra-ui/layout';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

import Items from './Items';

const ItemsLayout = ({ itemNames }) => {
  const hydrateItems = useStoreActions((actions: any) => actions.hydrateItems);
  const getItems = useStoreActions((actions: any) => actions.getItems);

  useEffect(() => {
    hydrateItems();
  }, []);

  return (
    <Box minH="89vh" p={8} ml={{ base: 0, md: 60 }}>
      {itemNames.map((item) => (
        <Box key={`${item.name}`}>
          <Heading as="h3" size="md" mb={2} color="brand.500" letterSpacing={1}>
            {item.name}
          </Heading>
          <Items
            items={getItems(item.name)}
            type={item.name}
            Form={item.Form}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ItemsLayout;
