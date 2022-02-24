import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Person } from '../../../shared/types';

const handler = async (req: NextApiRequest, res: NextApiResponse<Person>) => {
  await axios
    .get('http://localhost:3001/people')
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.json(err.message));
};

export default handler;
