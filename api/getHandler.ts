import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { Method } from 'axios';

const getHandler = async <T>(
  req: NextApiRequest,
  res: NextApiResponse<T>,
  url: string,
  method: Method
) => {
  const { query, body } = req;
  await axios({
    method,
    url,
    params: query,
    data: body
  })
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.json(err.message));
};

export default getHandler;
