import type { NextApiRequest, NextApiResponse } from 'next';
import getHandler from '../../../api/getHandler';
import { Task } from '../../../shared/types';
import { TASKS_URL } from '../../../shared/constants';

const tasks = async (req: NextApiRequest, res: NextApiResponse<Task>) => {
  const { body, method } = req;
  console.log(body);
  switch (method) {
    case 'GET':
      // Get data from your database
      getHandler<Task>(req, res, TASKS_URL, 'get');
      break;
    case 'PUT':
      // Update or create data in your database

      break;
    case 'POST':
      // Update or create data in your database

      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default tasks;
