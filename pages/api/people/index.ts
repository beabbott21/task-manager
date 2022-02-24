import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../../api/handler';
import { User } from '../../../shared/types';
import { USERS_URL } from '../../../shared/constants';

const people = async (req: NextApiRequest, res: NextApiResponse<User>) => {
  handler<User>(req, res, USERS_URL);
};

export default people;
