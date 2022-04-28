import MainLayout from '../components/MainLayout';
import IDCardForm from '../components/IDCardForm';

const addItemsList = {
  name: 'ID Card',
  Form: IDCardForm,
};

const IDCard = () => {
  return <MainLayout addItemsList={addItemsList} />;
};

export default IDCard;
