import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const addresses = await getItems(user.id, 'address');
  res.json(addresses);
});
