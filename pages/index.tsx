import MainLayout from '../components/MainLayout';

const menuItems = [
  {
    name: 'Password',
    form: 'Item Form Component',
  },
  {
    name: 'Secure Notes',
    form: 'Item Form Component',
  },
  {
    name: 'Credit/Debit Card',
    form: 'Item Form Component',
  },
  {
    name: 'Bank Account',
    form: 'Item Form Component',
  },
  {
    name: 'Address',
    form: 'Item Form Component',
  },
  {
    name: 'ID Card',
    form: 'Item Form Component',
  },
];

const Home = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default Home;
