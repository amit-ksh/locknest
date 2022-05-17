import MainLayout from '../components/MainLayout';
import SecureNotesForm from '../components/SecureNotesForm';

const itemsList = [
  {
    name: 'Secure Notes',
    Form: SecureNotesForm,
  },
];

const SecureNotes = () => {
  return <MainLayout itemsList={itemsList} />;
};

export default SecureNotes;
