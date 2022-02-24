import type { NextApiRequest, NextApiResponse } from 'next';
import getHandler from '../../../api/getHandler';
import { User } from '../../../shared/types';
import { USERS_URL } from '../../../shared/constants';

const people = async (req: NextApiRequest, res: NextApiResponse<User>) => {
  getHandler<User>(req, res, USERS_URL, 'get');
};

export default people;
