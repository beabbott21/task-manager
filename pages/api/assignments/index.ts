import type { NextApiRequest, NextApiResponse } from 'next';
import handler from '../../../api/handler';
import { TaskAssignment } from '../../../shared/types';
import { ASSIGNMENTS_URL } from '../../../shared/constants';

const assignments = async (req: NextApiRequest, res: NextApiResponse<TaskAssignment>) => {
  handler<TaskAssignment>(req, res, ASSIGNMENTS_URL);
};

export default assignments;
