import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Person } from '../../../shared/types';

const ASSIGNMENTS_URL = 'http://localhost:3001/task_assignments';

const handler = async (req: NextApiRequest, res: NextApiResponse<Person>) => {
  await axios
    .get(ASSIGNMENTS_URL, {
      params: req.query
    })
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.json(err.message));
};

export default handler;
