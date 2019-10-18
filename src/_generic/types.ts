import { GotInstance, GotJSONFn } from 'got';

export type ApiInstance = GotInstance<GotJSONFn>;

export type FilterParams = {
  readonly filter?: string;
  readonly pageNumber?: number;
  readonly pageSize?: number;
  readonly orderBy?: number;
};
