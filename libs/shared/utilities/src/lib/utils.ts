import axios, { AxiosRequestConfig } from 'axios';
import { environment } from '@bofa/environments';

const config: AxiosRequestConfig = {
  baseURL: `${environment.PROJECT_URL}/rest/v1`,
  headers: {
    apiKey: environment.API_KEY,
    Authorization: `Bearer ${environment.API_KEY}`,
    'Content-Type': 'application/json',
  },
};
export const supabaseInstance = axios.create(config);
