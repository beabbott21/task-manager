import axios from 'axios';
import { useState, useEffect } from 'react';
import { ApiResponse, AxiosResponse } from '../types/api';

export const useFetchData = <T>(url: string): AxiosResponse<T> => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
    fetchData();
  }, []);

  return { data, error, loading };
};
