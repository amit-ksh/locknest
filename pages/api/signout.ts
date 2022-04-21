import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  req.cookies.LOCKNEST_ACCESS_TOKEN = '';
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('LOCKNEST_ACCESS_TOKEN', '', {
      maxAge: -1,
      path: '/',
    })
  );
  res.send({});
};
