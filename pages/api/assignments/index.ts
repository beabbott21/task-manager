import type { NextApiRequest, NextApiResponse } from 'next';
import getHandler from '../../../api/getHandler';
import { TaskAssignment } from '../../../shared/types';
import { ASSIGNMENTS_URL } from '../../../shared/constants';

const assignments = async (req: NextApiRequest, res: NextApiResponse<TaskAssignment>) => {
  getHandler<TaskAssignment>(req, res, ASSIGNMENTS_URL, 'get');
};

export default assignments;
