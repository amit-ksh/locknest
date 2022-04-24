import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const paymentCards = await getItems(user.id, 'paymentCard');
  res.json(paymentCards);
});
