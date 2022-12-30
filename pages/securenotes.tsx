import { FC } from 'react';
import MainLayout from '../components/MainLayout';
import SecureNotesForm from '../components/SecureNotesForm';
import Head from 'next/head';

const itemsList = [
  {
    name: 'Secure Notes',
    Form: SecureNotesForm,
  },
];

const SecureNotes: FC<{}> = () => {
  return (
    <>
      <Head>
        <title>Notes | Locknest</title>
      </Head>
      <MainLayout itemsList={itemsList} />
    </>
  );
};

export default SecureNotes;
