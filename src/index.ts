import got from 'got';

import { reject, isNil } from 'ramda';

const withoutUndefined = reject(isNil);
const apiUrl = 'https://app.enotas.com.br/api';

interface ISalesParams {
  readonly filter: string;
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly orderBy: number;
}

const enotas = ({ apiKey }: { readonly apiKey: string } = { apiKey: '' }) => {
  if (!apiKey) {
    throw new Error('missing parameter "apiKey"');
  }

  const gotClient = got.extend({
    baseUrl: apiUrl,
    headers: {
      Authorization: `Basic ${apiKey}`
    },
    json: true
  });

  return {
    getSales: ({ filter, pageNumber, pageSize, orderBy }: ISalesParams) => {
      const query = withoutUndefined({
        filter,
        pageNumber,
        pageSize,
        orderBy
      });

      return gotClient.get('/vendas/getFilterBy', {
        query
      });
    }
  };
};

export default enotas;
