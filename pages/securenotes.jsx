import MainLayout from '../components/MainLayout';
import SecureNotesForm from '../components/SecureNotesForm';

const navItems = {
  name: 'Secure Notes',
  Form: SecureNotesForm,
};

const SecureNotes = () => {
  return <MainLayout navItems={navItems} />;
};

export default SecureNotes;
