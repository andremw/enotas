import { GotPromise } from 'got';
import { identity } from 'ramda';

import { ApiInstance, FilterParams } from './types';
import { createQueryObject } from '../util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const listFeature = (apiUrl: string) => (api: ApiInstance) => (query?: FilterParams): GotPromise<any> =>
  api.get(`${apiUrl}/getFilterBy`, createQueryObject(query));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFeature = (apiUrl: string) => (api: ApiInstance) => (id: string): GotPromise<any> =>
  api.get(`${apiUrl}/${id}`);

type BodyMapper = (obj: object) => object;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFeature = (apiUrl: string, mapper: BodyMapper = identity) => (api: ApiInstance) => (
  body: any,
): GotPromise<any> => api.post(apiUrl, { body: mapper(body) });

export const cancelFeature = (apiUrl: string) => (api: ApiInstance) => (id: string) =>
  api.post(`${apiUrl}/${id}/cancelar`);
