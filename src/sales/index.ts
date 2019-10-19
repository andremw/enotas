import got from 'got';
import { evolve } from 'ramda';

import { ApiInstance } from '../index';
import { joinWithSemicolon, withoutUndefined } from '../util';
import { SalesParams, Sale } from './types';

export const getSales = (api: ApiInstance) => ({
  filter,
  pageNumber,
  pageSize,
  orderBy,
}: SalesParams): got.GotPromise<object> => {
  const query = withoutUndefined({ filter, pageNumber, pageSize, orderBy });
  return api.get('/vendas/getFilterBy', { query });
};

const mapSale = evolve({
  produto: {
    tags: joinWithSemicolon,
  },
  tags: joinWithSemicolon,
});

export const createSale = (api: ApiInstance) => (sale: Sale): got.GotPromise<object> =>
  api.post('/vendas', { body: mapSale(sale) });

export const cancelSale = (api: ApiInstance) => (saleId: string) => api.post(`/vendas/${saleId}/cancelar`);
