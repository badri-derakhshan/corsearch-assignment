import axios, { Axios, AxiosError } from 'axios';

const $axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL });

const handleError = (error: AxiosError) => {
  //TODO show visual error
  console.log({ error });
};

$axios.interceptors.response.use((response) => response, handleError);

export const get = <T>(...args: Parameters<Axios['get']>) =>
  $axios.get<T>(...args).then((res) => res.data);
