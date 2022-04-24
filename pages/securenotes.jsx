import MainLayout from '../components/MainLayout';
import SecureNotesForm from '../components/SecureNotesForm';

const menuItems = {
  name: 'Secure Notes',
  Form: SecureNotesForm,
};

const SecureNotes = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default SecureNotes;
