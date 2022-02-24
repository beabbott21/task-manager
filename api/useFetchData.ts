import axios, { Method } from 'axios';
import { useState, useEffect, ReactNode } from 'react';
import { ApiResponse, AxiosResponse } from '../shared/types';

export const useFetchData = <T>(
  method: Method,
  baseURL: string,
  payload?: any,
  dep?: ReactNode
): AxiosResponse<T> => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // tmp
  const url = baseURL + '&_limit=20';

  const fetchData = () => {
    axios({
      method,
      url,
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    })
      .then((res: ApiResponse) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (dep === undefined) return;
    setLoading(true);
    fetchData();
  }, [dep]);

  return { data, error, loading, fetchData };
};
