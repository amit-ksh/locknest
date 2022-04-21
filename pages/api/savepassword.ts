import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import prisma from '../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, url, username, password, notes, userId } = req.body;
  const token = req.cookies.LOCKNEST_ACCESS_TOKEN;

  let newCreatedPassword;

  const user = jwt.verify(token, process.env.JWT_SECRET);
  console.log(user);

  try {
    newCreatedPassword = await prisma.password.create({
      data: {
        name,
        username,
        password,
        url,
        notes,
        user: {
          connect: { id: user.id },
        },
      },
    });
  } catch (e) {
    res.status(401);
    res.json({ error: e.message });
    return;
  }

  res.json({ newCreatedPassword });
};
