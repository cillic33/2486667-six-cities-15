import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {getToken} from './token';
import {toast} from 'react-toastify';
import {
  BAD_REQUEST_ERROR,
  UNAUTHORIZED_ERROR,
  NOT_FOUND_ERROR,
  StatusCodeMapping
} from '@/services/const';
import {StatusCodes} from 'http-status-codes';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

type DetailMessageType = {
  type: string;
  message: string;
}

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        const status = (error.response.status);
        const message = detailMessage.message;

        if (detailMessage && status && message) {
          switch (status) {
            case StatusCodes.BAD_REQUEST:
              toast.error(BAD_REQUEST_ERROR);
              break;
            case StatusCodes.UNAUTHORIZED:
              toast.warn(UNAUTHORIZED_ERROR);
              break;
            case StatusCodes.NOT_FOUND:
              toast.warn(NOT_FOUND_ERROR);
              break;
            default:
              toast.warn(message);
              break;
          }
        }
      }

      throw error;
    }
  );

  return api;
};
