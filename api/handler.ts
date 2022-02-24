import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async <T>(req: NextApiRequest, res: NextApiResponse<T>, url: string) => {
  await axios
    .get(url, {
      params: req.query
    })
    .then((response) => res.status(200).json(response.data))
    .catch((err) => res.json(err.message));
};

export default handler;
