import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { showToast } from 'src/components';
import { baseUrl, getAccessToken } from './EndPoints';

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

const ResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

const RequestInterceptor = async (config: AxiosRequestConfig | any) => {
  config.headers.Authorization = 'Bearer ' + (await getAccessToken());
  if (__DEV__) console.log({ requestURL: config.url, baseURL: config.baseURL })
  return config;
};

axiosInstance.interceptors.request.use(RequestInterceptor);

axiosInstance.interceptors.response.use(ResponseInterceptor, error => {
  if (error.code === 'ECONNABORTED') {
    // Timeout error
    return Promise.reject({ data: 'The request timed out.' });
  }
  if (error.response) {
    if (error.response.data === 'Unauthorized') {
      showToast('error', 'Session Expired! Please Login');

      sessionExpired();
    }
    return Promise.reject(error.response.data);
  } else if (error.request) {
    if (error?.request?._response.includes('Failed to connect to')) {
      return Promise.reject({ data: 'Could not connect to the server.' });
    }
    if (error?.request?._response.includes('Unable to resolve host')) {
      return Promise.reject({ data: 'No internet connection.' });
    }
    return Promise.reject(error?.request?._response);
  } else {
    return Promise.reject(error.request);
  }
});

const sessionExpired = () => { };

export { axiosInstance };
