import axios from 'axios';
import { useState, useEffect, ReactNode } from 'react';
import { ApiResponse, AxiosResponse } from '../shared/types';

export const useFetchData = <T>(url: string, dep?: ReactNode): AxiosResponse<T> => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(dep);
  const fetchData = () => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res: ApiResponse) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (dep === undefined) return;
    console.log('fetching');
    setLoading(true);
    fetchData();
  }, [dep]);

  return { data, error, loading, fetchData };
};
