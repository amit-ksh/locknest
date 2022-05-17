import { NextApiRequest, NextApiResponse } from 'next';
import { validateRoute } from '../../../lib/auth';
import prisma from '../../../lib/prisma';

export default validateRoute(
  async (req: NextApiRequest, res: NextApiResponse, user) => {
    const name: any = req.query.name;

    const items = await prisma[name].findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        name: 'asc',
      },
    });
    res.json(items);
  }
);
