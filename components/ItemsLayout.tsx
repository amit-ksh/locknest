import { Box, Heading } from '@chakra-ui/layout';
import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

const ItemsLayout = ({ itemNames }) => {
  const hydrateItems = useStoreActions((actions) => actions.hydrateItems);

  useEffect(() => {
    async function populateItems() {
      await hydrateItems();
    }

    populateItems();
  }, []);

  // const getEntries = (name) => {
  //   const val = name.toLowerCase().split(' ').join('');

  //   switch (val) {
  //     case 'password':
  //       return passwords;
  //     case 'securenotes':
  //       return secureNotes;
  //     case 'bankaccount':
  //       return bankAccounts;
  //     case 'paymentcard':
  //       return paymentCards;
  //     case 'address':
  //       return addresses;
  //     case 'email':
  //       return emails;
  //     case 'idcard':
  //       return IDCards;
  //   }
  // };

  return (
    <Box minH="89vh" p={8} ml={{ base: 0, md: 60 }}>
      {itemNames.map((item) => (
        <Box key={`${item.name}`}>
          <Heading as="h3" size="lg" mb={2} color="brand.500" letterSpacing={1}>
            {item.name}
          </Heading>
          {/* <Items
            items={getEntries(item.name)}
            type={item.name}
            Form={item.Form}
          /> */}
        </Box>
      ))}
    </Box>
  );
};

export default ItemsLayout;
