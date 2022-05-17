import { Box, Heading } from '@chakra-ui/layout';

import {
  useAddresses,
  useBankAccounts,
  useEmails,
  useIDCards,
  usePasswords,
  usePaymentCards,
  useSecureNotes,
} from '../lib/hooks';
import Items from './Items';

const ItemsLayout = ({ itemNames }) => {
  // const { passwords } = usePasswords();
  // const { secureNotes } = useSecureNotes();
  // const { bankAccounts } = useBankAccounts();
  // const { paymentCards } = usePaymentCards();
  // const { addresses } = useAddresses();
  // const { emails } = useEmails();
  // const { IDCards } = useIDCards();

  // const getItems = (name) => {
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
          <Items items={[{ name: 'Name' }]} Form={item.Form} />
        </Box>
      ))}
    </Box>
  );
};

export default ItemsLayout;
