import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { client } from '@bofa/api-services';
import App from './app/app';
import { API_URL } from '@bofa/utilities';

client.setConfig({
  baseURL: API_URL
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
