import { Box, Heading } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/react';
import { Actions, useStoreActions, useStoreRehydrated } from 'easy-peasy';
import { FC, useEffect } from 'react';
import { StoreModel } from '../store/model';
import { ItemsLayoutPropsTypes } from '../types/props';

import Items from './Items';

const ItemsLayout: FC<ItemsLayoutPropsTypes> = ({ itemNames }) => {
  const bg = useColorModeValue('gray.100', 'gray.700');
  const hydrateStore = useStoreActions(
    (actions: Actions<StoreModel>) => actions.hydrateStore
  );
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
        throw new Error('Not A Valid Item Name');
    }
  };

  useEffect(() => {
    if (isHydrated) return;

    hydrateStore();
  }, []);

  return (
    <Box minH="87vh" bg={bg} p={8} ml={{ base: 0, md: 60 }}>
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
