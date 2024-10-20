import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-axios',
  input: 'swagger.json',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: 'libs/bps-scorecard/api-services/src/lib/api'
  },
  types: {
    dates: 'types+transform',
    enums: 'javascript'
  },
  plugins: ['@tanstack/react-query']
})
