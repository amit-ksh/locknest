import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import getItems from '../../../lib/getItems';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const { name } = req.query;

    const addresses = await getItems(user.id, name);
    res.json(addresses);
  }
);
