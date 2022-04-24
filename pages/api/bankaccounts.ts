import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const bankAccounts = await getItems(user.id, 'bankAccount');
  res.json(bankAccounts);
});
