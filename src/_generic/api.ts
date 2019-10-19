import got from 'got';
import { ApiInstance } from './types';

const API_URL = 'https://app.enotas.com.br/api';

const ApiFactory = ({ apiKey }: { readonly apiKey: string }): ApiInstance =>
  got.extend({
    baseUrl: API_URL,
    headers: {
      Authorization: `Basic ${apiKey}`,
    },
    json: true,
  });

export default ApiFactory;
