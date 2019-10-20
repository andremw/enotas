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

export type ProductListType = (api: ApiInstance) => (query: FilterParams) => GotPromise<Product[]>;
export type ProductGetType = (api: ApiInstance) => (id: string) => GotPromise<Product>;
export type ProductCreateType = (api: ApiInstance) => (body: Product) => GotPromise<Product>;
