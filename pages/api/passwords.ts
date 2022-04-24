import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const passwords = await getItems(user.id, 'password');

  res.json(passwords);
});
