import { validateRoute } from '../../lib/auth';
import getItems from '../../lib/getItems';

export default validateRoute(async (req, res, user) => {
  const secureNotes = await getItems(user.id, 'secureNote');
  res.json(secureNotes);
});
