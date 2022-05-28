import { FC } from 'react';
import MainLayout from '../components/MainLayout';
import SecureNotesForm from '../components/SecureNotesForm';

const itemsList = [
  {
    name: 'Secure Notes',
    Form: SecureNotesForm,
  },
];

const SecureNotes: FC<{}> = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default SecureNotes;
