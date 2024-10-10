import { PROJECT_URL, API_KEY } from '@bofa/utils';

export const environment = {
  production: false,
  supabaseUrl: process.env[PROJECT_URL],
  supabaseKey: process.env[API_KEY],
};
