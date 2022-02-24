import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../../api/handler';
import { Person } from '../../../shared/types';
import { PERSONS_URL } from '../../../shared/constants';

const person = async (req: NextApiRequest, res: NextApiResponse<Person>) => {
  handler<Person>(req, res, PERSONS_URL);
};

export default person;
