import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const menuItems = {
  name: 'Password',
  Form: PasswordFrom,
};
const Home = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default Home;
