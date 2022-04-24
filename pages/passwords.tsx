import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const menuItems = {
  name: 'Password',
  Form: PasswordFrom,
};

const Password = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default Password;
