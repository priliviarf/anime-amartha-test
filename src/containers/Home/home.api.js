import { useAxios } from '../../hooks';
import { endpoints } from '../../configuration';

export const useHomeFetch = (payload) => {
  const getAnimes = useAxios(endpoints.getAnimes, 'get', payload);
  return { getAnimes };
};
