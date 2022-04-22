import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useToast,
} from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';
import { useState } from 'react';

import InputBox from './InputBox';

import { auth } from '../lib/mutations';

const BankAccountForm = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchAddress, setBranchAddress] = useState('');
  const [accountType, setAccountType] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [pin, setPin] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [ibanCode, setIbanCode] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success, error } = await auth('savepassword', {
      name,
      holderName,
      bankName,
      branchAddress,
      accountType,
      accountNo,
      pin,
      swiftCode,
      ibanCode,
    });

    if (success) {
      toast({
        title: 'Bank Account Saved.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          p={8}
          borderBottomWidth="1px"
          fontSize="4xl"
          bg="brand.500"
          color="white"
        >
          Add a bank account
        </DrawerHeader>

        <DrawerBody>
          <form id="add-password-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter a name"
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="Account Holder Name"
                type="text"
                placeholder="Enter account holder name"
                onChange={(e) => setHolderName(e.target.value)}
              />

              <InputBox
                label="Bank Name"
                type="text"
                placeholder="Enter bank name"
                onChange={(e) => setBankName(e.target.value)}
              />

              <InputBox
                label="Branch Address"
                type="text"
                placeholder="Enter branch address"
                onChange={(e) => setBranchAddress(e.target.value)}
              />

              <InputBox
                label="Account Type"
                type="text"
                placeholder="Enter Account Type"
                onChange={(e) => setAccountType(e.target.value)}
              />

              <InputBox
                label="Account Number"
                type="text"
                placeholder="Enter account umber"
                onChange={(e) => setAccountNo(e.target.value)}
              />

              <InputBox
                label="PIN"
                type="text"
                placeholder="Enter PIN"
                onChange={(e) => setPin(e.target.value)}
              />

              <InputBox
                label="SWIFT Code"
                type="text"
                placeholder="Enter SWIFT Code"
                onChange={(e) => setSwiftCode(e.target.value)}
              />

              <InputBox
                label="IBAN Code"
                type="text"
                placeholder="Enter IBAN Code"
                onChange={(e) => setIbanCode(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-password-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BankAccountForm;
