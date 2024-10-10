import axios, { AxiosRequestConfig } from 'axios';
import { API_KEY, PROJECT_URL } from '@bofa/utils';

export * from './lib/data-access';

const config: AxiosRequestConfig = {
  baseURL: `${PROJECT_URL}/rest/v1`,
  headers: {
    apiKey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};
export const supabaseInstance = axios.create(config);


export * from './lib/metrics-inventory/useMetrics';
