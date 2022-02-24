import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { Task } from '../../shared/types';

const handler = async (req: NextApiRequest, res: NextApiResponse<Task[]>) => {
  await axios
    .get('http://localhost:3001/tasks')
    .then((response) => res.status(200).send(response.data.data))
    .catch((err) => res.json(err.message));
};

export default handler;
