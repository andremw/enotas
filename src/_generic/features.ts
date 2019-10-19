import { ApiInstance, FilterParams } from './types';
import { createQueryObject } from '../util';
import { GotPromise } from 'got';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const listFeature = (apiUrl: string) => (api: ApiInstance) => (query?: FilterParams): GotPromise<any> =>
  api.get(`${apiUrl}/getFilterBy`, createQueryObject(query));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getFeature = (apiUrl: string) => (api: ApiInstance) => (id: string): GotPromise<any> =>
  api.get(`${apiUrl}/${id}`);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFeature = (apiUrl: string) => (api: ApiInstance) => (body: any): GotPromise<any> =>
  api.post(apiUrl, { body });
