import type { NextApiRequest, NextApiResponse } from 'next';
import getHandler from '../../../api/getHandler';
import { Task } from '../../../shared/types';
import { TASKS_URL } from '../../../shared/constants';

const tasks = async (req: NextApiRequest, res: NextApiResponse<Task>) => {
  getHandler<Task>(req, res, TASKS_URL, 'get');
};

export default tasks;
