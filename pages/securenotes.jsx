import MainLayout from '../components/MainLayout';
import SecureNotesForm from '../components/SecureNotesForm';

const addItemsList = {
  name: 'Secure Notes',
  Form: SecureNotesForm,
};

const SecureNotes = () => {
  return <MainLayout addItemsList={addItemsList} />;
};

export default SecureNotes;
