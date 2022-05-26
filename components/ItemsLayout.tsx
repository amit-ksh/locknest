import { Box, Heading } from '@chakra-ui/layout';
import { useStoreActions, useStoreRehydrated, useStoreState } from 'easy-peasy';
import { useEffect } from 'react';

import Items from './Items';

const ItemsLayout = ({ itemNames }) => {
  const hydrateStore = useStoreActions((actions: any) => actions.hydrateStore);
  const isHydrated = useStoreRehydrated();

  const getNameOfItem = (name) => {
    const key = name.toLowerCase().split(' ').join('');

    switch (key) {
      case 'password':
        return 'passwords';
      case 'securenotes':
        return 'secureNotes';
      case 'paymentcard':
        return 'paymentCards';
      case 'bankaccount':
        return 'bankAccounts';
      case 'email':
        return 'emails';
      case 'address':
        return 'addresses';
      case 'idcard':
        return 'idCards';

      default:
        return [];
    }
  };

  useEffect(() => {
    if (isHydrated) return;

    hydrateStore();
  }, []);

  return (
    <Box minH="89vh" p={8} ml={{ base: 0, md: 60 }}>
      {}
      {itemNames.map((item) => (
        <Box key={`${item.name}`}>
          <Heading as="h3" size="md" mb={2} color="brand.500" letterSpacing={1}>
            {item.name}
          </Heading>
          <Items
            type={item.name}
            name={getNameOfItem(item.name)}
            Form={item.Form}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ItemsLayout;
