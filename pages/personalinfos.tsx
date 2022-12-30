import MainLayout from '../components/MainLayout';
import AddressForm from '../components/AddressForm';
import EmailForm from '../components/EmailForm';
import { FC } from 'react';
import Head from 'next/head';

const itemsList = [
  {
    name: 'Address',
    Form: AddressForm,
  },
  {
    name: 'Email',
    Form: EmailForm,
  },
];

const PersonalInfo: FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Personal Info | Locknest</title>
      </Head>
      <MainLayout itemsList={itemsList} />
    </>
  );
};

export default PersonalInfo;
