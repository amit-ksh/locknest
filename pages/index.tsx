import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const menuItems = [
  {
    name: 'Password',
    Form: PasswordFrom,
  },
  {
    name: 'Secure Notes',
    Form: PasswordFrom,
  },
  {
    name: 'Credit/Debit Card',
    Form: PasswordFrom,
  },
  {
    name: 'Bank Account',
    Form: PasswordFrom,
  },
  {
    name: 'Address',
    Form: PasswordFrom,
  },
  {
    name: 'ID Card',
    Form: PasswordFrom,
  },
];

const Home = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default Home;
