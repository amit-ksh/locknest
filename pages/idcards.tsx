import MainLayout from '../components/MainLayout';
import IDCardForm from '../components/IDCardForm';

const menuItems = {
  name: 'ID Card',
  Form: IDCardForm,
};

const IDCard = () => {
  return <MainLayout menuItems={menuItems} />;
};

export default IDCard;
