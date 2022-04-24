import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const IDCards = await getItems(user.id, 'idCard');
  res.json(IDCards);
});
