import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const emails = await getItems(user.id, 'email');
  res.json(emails);
});
