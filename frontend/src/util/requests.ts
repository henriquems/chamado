import axios, { AxiosRequestConfig } from 'axios';
import { getAuthData } from './storage';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';


export const requestBackend = (config: AxiosRequestConfig) => {
    const headers = config.withCredentials
      ? {
          ...config.headers,
          Authorization: 'Bearer' + getAuthData().access_token,
        }
      : config.headers;
  
    return axios({ ...config, baseURL: BASE_URL, headers });
  };