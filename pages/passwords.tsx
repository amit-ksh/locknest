import MainLayout from '../components/MainLayout';
import PasswordFrom from '../components/PasswordForm';

const navItems = {
  name: 'Password',
  Form: PasswordFrom,
};

const Password = () => {
  return <MainLayout navItems={navItems} />;
};

export default Password;
