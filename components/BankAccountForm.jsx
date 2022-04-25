import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { Stack } from '@chakra-ui/layout';
import { useState } from 'react';

import InputBox from './InputBox';
import NotesInputField from './NotesInputField';

import { auth } from '../lib/mutations';
import { createToast, reset } from '../lib/form';

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
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    onClose();
    const { success } = await auth('saveitem', {
      data: {
        name,
        holderName,
        bankName,
        branchAddress,
        accountType,
        accountNo,
        pin,
        swiftCode,
        ibanCode,
        notes,
      },
      type: 'bankAccount',
    });

    if (success) {
      createToast('Bank Account Details Saved.');
    } else {
      createToast('Error!', 'Bank Account Details Not Saved', 'error');
    }

    reset([
      setName,
      setHolderName,
      setBankName,
      setBranchAddress,
      setAccountType,
      setAccountNo,
      setPin,
      setSwiftCode,
      setIbanCode,
      setNotes,
    ]);
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
          <form id="add-bank-account-form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <InputBox
                label="Name"
                type="text"
                placeholder="Enter a name"
                value={name}
                isRequired={true}
                onChange={(e) => setName(e.target.value)}
              />

              <InputBox
                label="Account Holder Name"
                type="text"
                placeholder="Enter account holder name"
                value={holderName}
                onChange={(e) => setHolderName(e.target.value)}
              />

              <InputBox
                label="Bank Name"
                type="text"
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />

              <InputBox
                label="Branch Address"
                type="text"
                placeholder="Enter branch address"
                value={branchAddress}
                onChange={(e) => setBranchAddress(e.target.value)}
              />

              <InputBox
                label="Account Type"
                type="text"
                placeholder="Enter Account Type"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              />

              <InputBox
                label="Account Number"
                type="text"
                placeholder="Enter account umber"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              />

              <InputBox
                label="PIN"
                type="text"
                placeholder="Enter PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />

              <InputBox
                label="SWIFT Code"
                type="text"
                placeholder="Enter SWIFT Code"
                value={swiftCode}
                onChange={(e) => setSwiftCode(e.target.value)}
              />

              <InputBox
                label="IBAN Code"
                type="text"
                placeholder="Enter IBAN Code"
                value={ibanCode}
                onChange={(e) => setIbanCode(e.target.value)}
              />

              <NotesInputField
                value={notes}
                maxH="130px"
                onChange={(e) => setNotes(e.target.value)}
              />
            </Stack>
          </form>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <Button variant="danger" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="add-bank-account-form">
            Submit
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BankAccountForm;
