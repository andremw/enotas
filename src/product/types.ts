import { GotPromise } from 'got';
import { ApiInstance, FilterParams } from '../_generic/types';

export type Product = {
  readonly id?: string;
  readonly createdAt?: Date;
  readonly cadastradoAutomaticamente?: boolean;
  readonly nome?: string;
  readonly idExterno?: string;
  readonly diasGarantia?: number;
  readonly valorTotal?: number;
  readonly aliquotaIss?: any;
  readonly discriminacaoServico?: any;
  readonly tags?: string;
  readonly produtoId?: string;
};

export type CustomerListType = (api: ApiInstance) => (query: FilterParams) => GotPromise<Product[]>;
export type CustomerGetType = (api: ApiInstance) => (id: string) => GotPromise<Product>;
export type CustomerCreateType = (api: ApiInstance) => (body: Product) => GotPromise<Product>;
